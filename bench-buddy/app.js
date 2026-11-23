// Bench Buddy: 3D view of the CeBr3 + fiber bench, mirroring simulations/geometry.mac and
// DetectorConstruction.cc. Geant4 frame, 1 unit = 1 mm: beam along +z, fiber along x (SiPM at +x),
// y up, origin at the fiber centre. Rotations are R = Rz * Ry * Rx (Three.js Euler order 'ZYX'),
// i.e. CLHEP rotateX(rx); rotateY(ry); rotateZ(rz), used as an active G4Transform3D(R, t).
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { TransformControls } from "three/addons/controls/TransformControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { CSS2DRenderer, CSS2DObject } from "three/addons/renderers/CSS2DRenderer.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

// ------------------------------------------------------------------ defaults (geometry.mac)
const DEFAULT_PARAMS = {
  sourceDiameter: 25.0, sourceThickness: 3.2, activeDiameter: 5.0, activeThickness: 0.2,
  collimatorMaterial: "W97", collimatorOD: 50.0, collimatorLength: 20.0, collimatorHole: 3.0,
  collimatorToFiber: 9.0,
  fiberDiameter: 2.0, fiberLength: 240.0, cladFraction: 0.03, teflonLayers: 2, teflonLayerThickness: 0.08,
  sipmSize: 2.0, sipmThickness: 0.5,
  fiberToCeBr3: 35.0, frontCanOD: 29.0, frontCanLength: 26.0, rearCanOD: 41.0, rearCanLength: 36.0,
  canWall: 0.5, crystalDiameter: 25.0, crystalLength: 25.0, windowThickness: 1.0, sipmArrayThickness: 0.5,
  pcbThickness: 1.6,
  tableTop: -53.4, boxWall: 19.05,
};
const DIM_GROUPS = [
  ["Source", ["sourceDiameter", "sourceThickness", "activeDiameter", "activeThickness"]],
  ["Collimator", ["collimatorMaterial", "collimatorOD", "collimatorLength", "collimatorHole", "collimatorToFiber"]],
  ["Fiber", ["fiberDiameter", "fiberLength", "cladFraction", "teflonLayers", "teflonLayerThickness", "sipmSize", "sipmThickness"]],
  ["CeBr3", ["fiberToCeBr3", "frontCanOD", "frontCanLength", "rearCanOD", "rearCanLength", "canWall",
             "crystalDiameter", "crystalLength", "windowThickness", "sipmArrayThickness", "pcbThickness"]],
  ["Table & box", ["tableTop", "boxWall"]],
];
const LINKED = { collimatorToFiber: "source", fiberToCeBr3: "cebr3" };   // set by the part positions
const STRING_PARAMS = new Set(["collimatorMaterial"]);
const INT_PARAMS = new Set(["teflonLayers"]);

// standard lead bricks (inch dims -> mm); the 2 x 4 x 8 in brick is the usual one
const IN = 25.4;
const BRICK_PRESETS = [
  ["2 × 4 × 8 in (standard)", [4, 2, 8]],
  ["2 × 4 × 6 in", [4, 2, 6]],
  ["2 × 2 × 8 in", [2, 2, 8]],
  ["2 × 4 × 4 in", [4, 2, 4]],
  ["1 × 2 × 4 in", [2, 1, 4]],
];
const DENSITY = { G4_Pb: 11.35, G4_W: 19.3, G4_Fe: 7.874, G4_Cu: 8.96, G4_POLYETHYLENE: 0.94 };
const TABLE = { skin: 4.8, core: 193.4, X: 900, Z: 1200 };
const BOX = { X: 431.8, Y: 304.8, Z: 1041.4 };

function defaultBrick(i = 0) {
  const d = [4 * IN, 2 * IN, 8 * IN];
  return { id: "brick" + Date.now() + "_" + i, dims: d, material: "G4_Pb",
           pos: [-140, DEFAULT_PARAMS.tableTop + d[1] / 2 + i * d[1], 150], rot: [0, 0, 0] };   // new ones stack up
}
function defaultState() {
  return {
    params: { ...DEFAULT_PARAMS },
    parts: {
      source: { pos: [0, 0, -DEFAULT_PARAMS.collimatorToFiber], rot: [0, 0, 0] },
      fiber: { pos: [0, 0, 0], rot: [0, 0, 0] },
      cebr3: { pos: [0, 0, DEFAULT_PARAMS.fiberToCeBr3], rot: [0, 0, 0] },
    },
    bricks: [defaultBrick()],
    show: { table: true, box: true, lid: false, holders: true, xray: false, photons: true },
  };
}

// ------------------------------------------------------------------ renderer, scene, camera
const host = document.getElementById("viewport");
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
host.appendChild(renderer.domElement);

const labels = new CSS2DRenderer();
labels.setSize(innerWidth, innerHeight);
Object.assign(labels.domElement.style, { position: "absolute", inset: "0", pointerEvents: "none" });
host.appendChild(labels.domElement);

const scene = new THREE.Scene();
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.55;
const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 1, 20000);
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableDamping = true;
orbit.dampingFactor = 0.08;
orbit.screenSpacePanning = true;

scene.add(new THREE.HemisphereLight(0xfff6ff, 0xd9d2ff, 1.25));
const sun = new THREE.DirectionalLight(0xffffff, 1.6);
sun.position.set(260, 520, 180);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -450, right: 450, top: 450, bottom: -450, near: 50, far: 1500 });
sun.shadow.bias = -0.0004;
scene.add(sun);
const fillLight = new THREE.DirectionalLight(0xffe2f0, 0.5);
fillLight.position.set(-300, 150, -250);
scene.add(fillLight);

// ------------------------------------------------------------------ materials
function mat(color, o = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: o.rough ?? 0.55, metalness: o.metal ?? 0.0,
    transparent: (o.opacity ?? 1) < 1, opacity: o.opacity ?? 1, emissive: o.emissive ?? 0x000000,
    emissiveIntensity: o.ei ?? 1, side: o.side ?? THREE.FrontSide, depthWrite: (o.opacity ?? 1) >= 0.6 });
}
const PALETTE = {
  tungsten: () => mat(0x9aa6bd, { metal: 0.65, rough: 0.32 }),
  sourceDisc: () => mat(0xffe08a, { opacity: 0.85, rough: 0.3 }),
  active: () => mat(0xff6b81, { emissive: 0xff3b5c, ei: 0.8 }),
  pla: () => mat(0x4a4163, { rough: 0.85 }),
  teflon: () => mat(0xffffff, { opacity: 0.55, rough: 0.9 }),
  core: () => mat(0x59b4ff, { emissive: 0x2a86ff, ei: 0.35, rough: 0.2 }),
  sipm: () => mat(0x2b2838, { rough: 0.4, metal: 0.3 }),
  can: () => mat(0xd9dee8, { opacity: 0.38, metal: 0.5, rough: 0.3 }),
  crystal: () => mat(0x7be3b0, { emissive: 0x3fd08e, ei: 0.35, rough: 0.15 }),
  window: () => mat(0xcfe8ff, { opacity: 0.6, rough: 0.1 }),
  pcb: () => mat(0x3fae6a, { rough: 0.6 }),
  lead: () => mat(0x7e879b, { rough: 0.85, metal: 0.25 }),
  steel: () => mat(0xd3d7e0, { metal: 0.55, rough: 0.38 }),
  core_table: () => mat(0xbfc4cf, { opacity: 0.35, rough: 0.7 }),
  wood: () => mat(0xd9b38c, { opacity: 0.14, rough: 0.9, side: THREE.DoubleSide }),
};

// ------------------------------------------------------------------ geometry helpers (local frames)
const tubeZ = (rIn, rOut, len, z0, seg = 64) => {          // tube along z from z0 to z0+len
  const s = new THREE.Shape(); s.absarc(0, 0, rOut, 0, Math.PI * 2, false);
  if (rIn > 0) { const h = new THREE.Path(); h.absarc(0, 0, rIn, 0, Math.PI * 2, true); s.holes.push(h); }
  const g = new THREE.ExtrudeGeometry(s, { depth: len, bevelEnabled: false, curveSegments: seg });
  g.translate(0, 0, z0); return g;
};
const plateWithHole = (w, h, t, r, holeY, z0) => {          // w (x) by h (y) plate, thickness t along z
  const s = new THREE.Shape();
  s.moveTo(-w / 2, -h / 2); s.lineTo(w / 2, -h / 2); s.lineTo(w / 2, h / 2); s.lineTo(-w / 2, h / 2); s.lineTo(-w / 2, -h / 2);
  const p = new THREE.Path(); p.absarc(0, holeY, r, 0, Math.PI * 2, true); s.holes.push(p);
  const g = new THREE.ExtrudeGeometry(s, { depth: t, bevelEnabled: false, curveSegments: 48 });
  g.translate(0, 0, z0); return g;
};
const boxAt = (dx, dy, dz, x, y, z) => { const g = new THREE.BoxGeometry(dx, dy, dz); g.translate(x, y, z); return g; };

function mesh(geo, material, name, extra = {}) {
  const m = new THREE.Mesh(geo, material);
  m.name = name; m.castShadow = true; m.receiveShadow = true;
  Object.assign(m.userData, extra);
  return m;
}

// Source + collimator + source holder; origin at the collimator exit-face centre.
function buildSource(p) {
  const L = p.collimatorLength, t = p.sourceThickness, out = [];
  out.push(mesh(tubeZ(p.collimatorHole / 2, p.collimatorOD / 2, L, -L), PALETTE.tungsten(), "Collimator", { solid: true, housing: true }));
  out.push(mesh(tubeZ(0, p.sourceDiameter / 2, t, -L - t), PALETTE.sourceDisc(), "Source disc", { solid: true }));
  const act = mesh(tubeZ(0, p.activeDiameter / 2, Math.max(p.activeThickness, 0.4), -L - t / 2 - 0.2), PALETTE.active(), "Active spot");
  act.userData.active = true; out.push(act);
  // PLA holder plates (57 x 57 x 6.5, Ø50.9 x 3.25 recess on +z, Ø25.5 hole), front plate around the collimator end
  const pT = 6.5, rec = 3.25, zF = -L + rec - pT / 2;
  for (const [zc, nm] of [[zF, "Source holder front"], [zF - pT, "Source holder back"]]) {
    out.push(mesh(plateWithHole(57, 57, rec, 25.45, 0, zc), PALETTE.pla(), nm, { solid: true, holder: true, housing: true }));
    out.push(mesh(plateWithHole(57, 57, pT - rec, 12.75, 0, zc - pT / 2), PALETTE.pla(), nm, { solid: true, holder: true, housing: true }));
  }
  const zBackFace = zF - pT - pT / 2;
  out.push(mesh(boxAt(57, 5, 35, 0, -28.5 + 2.5, zBackFace - 17.5), PALETTE.pla(), "Source holder flange", { solid: true, holder: true, housing: true }));
  return out;
}

// Fiber (+x SiPM, Teflon cap at -x) and its two supports; origin at the fiber centre.
function buildFiber(p) {
  const out = [], rClad = p.fiberDiameter / 2, rCore = rClad - p.cladFraction * p.fiberDiameter;
  const tTef = p.teflonLayers * p.teflonLayerThickness, L = p.fiberLength, hL = L / 2;
  const alongX = (g) => { g.rotateY(Math.PI / 2); return g; };
  out.push(mesh(alongX(tubeZ(rClad, rClad + tTef, L, -hL, 32)), PALETTE.teflon(), "Teflon wrap", { solid: true }));
  out.push(mesh(alongX(tubeZ(0, rClad + tTef, tTef, -hL - tTef, 32)), PALETTE.teflon(), "Teflon cap"));
  out.push(mesh(alongX(tubeZ(0, rCore, L, -hL, 32)), PALETTE.core(), "Fiber core"));
  out.push(mesh(boxAt(p.sipmThickness, p.sipmSize, p.sipmSize, hL + p.sipmThickness / 2, 0, 0), PALETTE.sipm(), "Fiber SiPM", { solid: true }));
  // supports: two 50 mm grooved channel pieces under the ends, each in the slot of a post on the table
  const yT = p.tableTop, ySlot = yT + 51.4, yTop = ySlot + 4.5, chHalf = 25, chX = hL - chHalf;
  const prof = new THREE.Shape();
  prof.moveTo(-3.5, ySlot); prof.lineTo(3.5, ySlot); prof.lineTo(3.5, yTop); prof.lineTo(-3.5, yTop); prof.lineTo(-3.5, ySlot);
  const groove = new THREE.Path(); groove.absarc(0, 0, 1.8, 0, Math.PI * 2, true); prof.holes.push(groove);
  for (const sx of [1, -1]) {
    const g = new THREE.ExtrudeGeometry(prof, { depth: 2 * chHalf, bevelEnabled: false, curveSegments: 32 });
    g.rotateY(Math.PI / 2); g.translate(sx * chX - chHalf, 0, 0);
    out.push(mesh(g, PALETTE.pla(), "Fiber channel", { solid: true, holder: true, housing: true }));
    out.push(mesh(boxAt(15, ySlot - yT, 19, sx * chX, (yT + ySlot) / 2, 0), PALETTE.pla(), "Fiber post", { solid: true, holder: true, housing: true }));
    for (const sz of [1, -1])
      out.push(mesh(boxAt(15, 6, 6, sx * chX, ySlot + 3, sz * 6.5), PALETTE.pla(), "Fiber post wall", { holder: true, housing: true }));
    out.push(mesh(boxAt(15, 5, 19, sx * (chX + 15), yT + 2.5, 0), PALETTE.pla(), "Fiber post foot", { solid: true, holder: true, housing: true }));
  }
  return out;
}

// CeBr3 module + PLA holder; origin at the centre of the front (narrow) can's face.
function buildCeBr3(p) {
  const out = [], lF = p.frontCanLength, lR = p.rearCanLength, w = p.canWall;
  out.push(mesh(tubeZ(0, p.frontCanOD / 2, lF, 0), PALETTE.can(), "CeBr3 front can", { solid: true, housing: true }));
  out.push(mesh(tubeZ(0, p.crystalDiameter / 2, p.crystalLength, lF - p.crystalLength), PALETTE.crystal(), "CeBr3 crystal"));
  out.push(mesh(tubeZ(0, p.rearCanOD / 2, lR, lF), PALETTE.can(), "CeBr3 rear can", { solid: true, housing: true }));
  let z = lF;
  out.push(mesh(tubeZ(0, p.crystalDiameter / 2, p.windowThickness, z), PALETTE.window(), "Window")); z += p.windowThickness;
  out.push(mesh(tubeZ(0, p.crystalDiameter / 2, p.sipmArrayThickness, z), PALETTE.sipm(), "SiPM array")); z += p.sipmArrayThickness;
  out.push(mesh(tubeZ(0, p.rearCanOD / 2 - w - 1, p.pcbThickness, z), PALETTE.pcb(), "PCB"));
  // holder: upright 45 x 72 x 20 with a Ø29.2 bore on the axis, back face at the can step; base 120 x 8 x 25
  const yB = -53.4, baseT = 8, yTop = 26.6, upH = yTop - (yB + baseT), yMid = yB + baseT + upH / 2, zUp = lF - 10;
  out.push(mesh(plateWithHole(45, upH, 20, 14.6, -yMid, zUp - 10).translate(0, yMid, 0), PALETTE.pla(), "CeBr3 holder", { solid: true, holder: true, housing: true }));
  out.push(mesh(boxAt(120, baseT, 25, 0, yB + baseT / 2, zUp), PALETTE.pla(), "CeBr3 holder base", { solid: true, holder: true, housing: true }));
  return out;
}

function buildBrick(b) {
  const r = Math.min(2, Math.min(...b.dims) / 6);
  const g = new RoundedBoxGeometry(b.dims[0], b.dims[1], b.dims[2], 3, r);
  const m = mesh(g, PALETTE.lead(), "Lead brick", { solid: true });
  if (b.material !== "G4_Pb") m.material.color.set({ G4_W: 0x8f9bb3, G4_Fe: 0xa58f86, G4_Cu: 0xe0a07a, G4_POLYETHYLENE: 0xf3f0ea }[b.material] ?? 0x7e879b);
  return [m];
}

// table hole pattern (M6 on 25 mm pitch) as a tiny canvas texture
function holeTexture() {
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const g = c.getContext("2d");
  g.fillStyle = "#e4e7ee"; g.fillRect(0, 0, 64, 64);
  const grd = g.createRadialGradient(32, 32, 2, 32, 32, 9);
  grd.addColorStop(0, "#6f7486"); grd.addColorStop(1, "#c9cdd8");
  g.fillStyle = grd; g.beginPath(); g.arc(32, 32, 7, 0, Math.PI * 2); g.fill();
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8; t.repeat.set(TABLE.X / 25, TABLE.Z / 25);
  return t;
}
const HOLES = holeTexture();

function buildTable(p) {
  const out = [], y0 = p.tableTop, sk = TABLE.skin, co = TABLE.core;
  const top = PALETTE.steel(); top.map = HOLES;
  const side = PALETTE.steel();
  const t = mesh(boxAt(TABLE.X, sk, TABLE.Z, 0, y0 - sk / 2, 0), [side, side, top, side, side, side], "Table top", { solid: true, staticPart: true });
  t.castShadow = false; out.push(t);
  out.push(mesh(boxAt(TABLE.X, co, TABLE.Z, 0, y0 - sk - co / 2, 0), PALETTE.core_table(), "Table core", { staticPart: true }));
  out.push(mesh(boxAt(TABLE.X, sk, TABLE.Z, 0, y0 - 1.5 * sk - co, 0), side.clone(), "Table bottom", { staticPart: true }));
  return out;
}
function buildBox(p) {
  const out = [], y0 = p.tableTop, t = p.boxWall, { X, Y, Z } = BOX, hW = (Y - t) / 2;
  const walls = [
    ["Box side +x", [t, 2 * hW, Z], [X / 2 - t / 2, y0 + hW, 0]],
    ["Box side −x", [t, 2 * hW, Z], [-X / 2 + t / 2, y0 + hW, 0]],
    ["Box end +z", [X - 2 * t, 2 * hW, t], [0, y0 + hW, Z / 2 - t / 2]],
    ["Box end −z", [X - 2 * t, 2 * hW, t], [0, y0 + hW, -Z / 2 + t / 2]],
    ["Box lid", [X, t, Z], [0, y0 + Y - t / 2, 0]],
  ];
  for (const [nm, d, c] of walls) {
    const g = boxAt(...d, ...c);
    const m = mesh(g, PALETTE.wood(), nm, { staticPart: true, housing: true, lid: nm === "Box lid", wall: nm !== "Box lid" });
    m.castShadow = false; m.receiveShadow = false;
    const e = new THREE.LineSegments(new THREE.EdgesGeometry(g), new THREE.LineBasicMaterial({ color: 0xb08a66, transparent: true, opacity: 0.55 }));
    e.userData.edgeOf = m; m.add(e);
    out.push(m);
  }
  return out;
}

// ------------------------------------------------------------------ parts
const PART_INFO = {
  source: { name: "Source + collimator", emoji: "☢️", sub: "Cs-137 · W97 collimator · PLA holder" },
  fiber: { name: "Fiber + supports", emoji: "🧵", sub: "Ø2 mm × 240 mm · SiPM at +x" },
  cebr3: { name: "CeBr₃ module", emoji: "🔮", sub: "Scionix 25B25 · PLA holder" },
  brick: { name: "Lead brick", emoji: "🧱", sub: "" },
};
let state = defaultState();
const groups = {};                 // id -> THREE.Group
const tableGroup = new THREE.Group(), boxGroup = new THREE.Group();
scene.add(tableGroup, boxGroup);

function newGroup(id, kind) {
  const g = new THREE.Group();
  g.rotation.order = "ZYX";
  g.userData = { id, kind };
  scene.add(g);
  groups[id] = g;
  const tagEl = document.createElement("div"); tagEl.className = "tag";
  const tag = new CSS2DObject(tagEl); tag.visible = false; g.add(tag); g.userData.tag = tag;
  return g;
}
function fill(g, meshes) {
  for (const c of [...g.children]) if (c !== g.userData.tag) { g.remove(c); disposeTree(c); }
  for (const m of meshes) { m.userData.owner = g.userData.id; g.add(m); }
}
function disposeTree(o) {
  o.traverse((n) => { n.geometry?.dispose(); const ms = Array.isArray(n.material) ? n.material : [n.material]; ms.forEach((m) => m?.dispose?.()); });
}
function partState(id) { return id.startsWith("brick") ? state.bricks.find((b) => b.id === id) : state.parts[id]; }

function rebuildAll() {
  const p = state.params;
  for (const id of ["source", "fiber", "cebr3"]) if (!groups[id]) newGroup(id, id);
  fill(groups.source, buildSource(p));
  fill(groups.fiber, buildFiber(p));
  fill(groups.cebr3, buildCeBr3(p));
  for (const id of Object.keys(groups)) if (id.startsWith("brick") && !state.bricks.find((b) => b.id === id)) {
    if (selected === groups[id]) select(null);
    scene.remove(groups[id]); disposeTree(groups[id]); delete groups[id];
  }
  for (const b of state.bricks) { if (!groups[b.id]) newGroup(b.id, "brick"); fill(groups[b.id], buildBrick(b)); }
  for (const c of [...tableGroup.children]) { tableGroup.remove(c); disposeTree(c); }
  for (const c of [...boxGroup.children]) { boxGroup.remove(c); disposeTree(c); }
  buildTable(p).forEach((m) => tableGroup.add(m));
  buildBox(p).forEach((m) => boxGroup.add(m));
  applyTransforms();
  applyShow();
  refreshUI();
}

function applyTransforms() {
  for (const [id, g] of Object.entries(groups)) {
    const s = partState(id); if (!s) continue;
    g.position.fromArray(s.pos);
    g.rotation.set(...s.rot.map(THREE.MathUtils.degToRad), "ZYX");
  }
  // the table and box are centred along z on the experiment, as in DetectorConstruction:
  // source-holder flange back end to the CeBr3 rear-can end
  const p = state.params, src = state.parts.source.pos[2], ce = state.parts.cebr3.pos[2];
  const zMid = 0.5 * ((src - p.collimatorLength - 44.75) + (ce + p.frontCanLength + p.rearCanLength));
  tableGroup.position.z = zMid; boxGroup.position.z = zMid;
}

function readTransform(g) {
  const s = partState(g.userData.id);
  const r = (v) => Math.round(v * 1000) / 1000;
  s.pos = g.position.toArray().map(r);
  s.rot = [g.rotation.x, g.rotation.y, g.rotation.z].map((a) => r(THREE.MathUtils.radToDeg(a)));
  if (g.userData.id === "source") state.params.collimatorToFiber = r(-s.pos[2]);
  if (g.userData.id === "cebr3") state.params.fiberToCeBr3 = r(s.pos[2]);
}

function applyShow() {
  const s = state.show, xr = s.xray;
  tableGroup.visible = s.table;
  boxGroup.visible = s.box;
  scene.traverse((o) => {
    if (!o.isMesh) return;
    if (o.userData.holder) o.visible = s.holders;
    if (o.userData.lid) o.visible = s.lid;
    const ms = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of ms) {
      if (m.userData.baseOpacity === undefined) m.userData.baseOpacity = m.opacity;
      const base = m.userData.baseOpacity;
      const op = xr && o.userData.housing ? Math.min(base, o.userData.wall || o.userData.lid ? 0.06 : 0.18) : base;
      m.opacity = op; m.transparent = op < 1; m.depthWrite = op >= 0.6;
    }
  });
  photons.visible = s.photons;
  document.querySelectorAll("[data-toggle]").forEach((b) => b.classList.toggle("on", !!s[b.dataset.toggle]));
}

// ------------------------------------------------------------------ photon sparkles ✨
const N_PH = 140;
const phGeo = new THREE.BufferGeometry();
phGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(N_PH * 3), 3));
const phData = Array.from({ length: N_PH }, () => ({ dir: new THREE.Vector3(), t: Math.random(), speed: 0.4 + Math.random() * 0.5 }));
function sparkTex() {
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const g = c.getContext("2d"), grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, "rgba(255,255,255,1)"); grd.addColorStop(0.3, "rgba(255,230,150,0.9)"); grd.addColorStop(1, "rgba(255,180,220,0)");
  g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}
const photons = new THREE.Points(phGeo, new THREE.PointsMaterial({ size: 5, map: sparkTex(), transparent: true,
  depthWrite: false, blending: THREE.AdditiveBlending, color: 0xfff1b8 }));
photons.frustumCulled = false;
scene.add(photons);
const _q = new THREE.Quaternion(), _o = new THREE.Vector3(), _ax = new THREE.Vector3();
function respawn(d) {
  const half = THREE.MathUtils.degToRad(38), ct = 1 - Math.random() * (1 - Math.cos(half)), st = Math.sqrt(1 - ct * ct), ph = Math.random() * Math.PI * 2;
  d.dir.set(st * Math.cos(ph), st * Math.sin(ph), ct); d.t = 0; d.speed = 0.4 + Math.random() * 0.5;
}
phData.forEach(respawn);
function updatePhotons(dt) {
  if (!photons.visible) return;
  const g = groups.source, p = state.params;
  g.updateMatrixWorld();
  _o.set(0, 0, -p.collimatorLength - p.sourceThickness / 2).applyMatrix4(g.matrixWorld);
  g.getWorldQuaternion(_q);
  const arr = phGeo.attributes.position.array;
  phData.forEach((d, i) => {
    d.t += dt * d.speed;
    if (d.t > 1) respawn(d);
    _ax.copy(d.dir).applyQuaternion(_q).multiplyScalar(d.t * 160);
    arr[3 * i] = _o.x + _ax.x; arr[3 * i + 1] = _o.y + _ax.y; arr[3 * i + 2] = _o.z + _ax.z;
  });
  phGeo.attributes.position.needsUpdate = true;
}

// ------------------------------------------------------------------ axes
function addAxes() {
  const g = new THREE.Group();
  const mk = (dir, color, text) => {
    const a = new THREE.ArrowHelper(dir, new THREE.Vector3(), 34, color, 7, 4);
    a.line.material.linewidth = 2; g.add(a);
    const el = document.createElement("div"); el.className = "axislbl"; el.textContent = text; el.style.color = "#" + color.toString(16).padStart(6, "0");
    const l = new CSS2DObject(el); l.position.copy(dir).multiplyScalar(42); g.add(l);
  };
  mk(new THREE.Vector3(1, 0, 0), 0xff6b81, "x (SiPM)");
  mk(new THREE.Vector3(0, 1, 0), 0x3fbf86, "y");
  mk(new THREE.Vector3(0, 0, 1), 0x6f7dff, "z (beam)");
  g.position.set(0, state.params.tableTop + 0.5, -110);
  scene.add(g);
  return g;
}
const axes = addAxes();

// ------------------------------------------------------------------ selection + gizmo
const gizmo = new TransformControls(camera, renderer.domElement);
gizmo.setSize(0.85);
gizmo.setTranslationSnap(1);
gizmo.setRotationSnap(THREE.MathUtils.degToRad(15));
gizmo.setSpace("world");
scene.add(gizmo);
let selected = null, hovered = null, dragging = false;
gizmo.addEventListener("dragging-changed", (e) => {
  orbit.enabled = !e.value; dragging = e.value;
  if (!e.value && selected) { readTransform(selected); applyTransforms(); commit(); }
});
gizmo.addEventListener("objectChange", () => { if (!selected) return; readTransform(selected); applyTransforms(); refreshLive(); });

function tint(g, color, intensity) {
  if (!g) return;
  g.traverse((o) => {
    if (!o.isMesh || o.userData.active) return;
    const ms = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of ms) {
      if (m.userData.baseEmissive === undefined) { m.userData.baseEmissive = m.emissive.getHex(); m.userData.baseEI = m.emissiveIntensity; }
      if (color === null) { m.emissive.setHex(m.userData.baseEmissive); m.emissiveIntensity = m.userData.baseEI; }
      else { m.emissive.setHex(color); m.emissiveIntensity = intensity; }
    }
  });
}
function select(g) {
  if (selected) { tint(selected, null); selected.userData.tag.visible = false; }
  selected = g;
  if (g) {
    gizmo.attach(g); tint(g, 0x8f7cff, 0.22);
    const info = g.userData.kind === "brick" ? PART_INFO.brick : PART_INFO[g.userData.id];
    g.userData.tag.element.textContent = info.emoji + " " + info.name;
    g.userData.tag.visible = true;
    g.userData.tag.position.set(0, 60, 0);
  } else gizmo.detach();
  refreshUI();
}

const ray = new THREE.Raycaster(), ptr = new THREE.Vector2();
function pick(ev) {
  const r = renderer.domElement.getBoundingClientRect();
  ptr.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ptr, camera);
  const targets = Object.values(groups);
  const hits = ray.intersectObjects(targets, true).filter((h) => h.object.visible && h.object.isMesh);
  if (!hits.length) return null;
  let o = hits[0].object; while (o && !groups[o.userData.owner]) o = o.parent;
  return o ? groups[o.userData.owner] : null;
}
let downAt = null;
renderer.domElement.addEventListener("pointerdown", (e) => { downAt = [e.clientX, e.clientY]; });
renderer.domElement.addEventListener("pointerup", (e) => {
  if (!downAt || dragging) return;
  const moved = Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]); downAt = null;
  if (moved > 4 || gizmo.dragging) return;
  const g = pick(e);
  if (g !== selected) select(g);
});
renderer.domElement.addEventListener("pointermove", (e) => {
  if (dragging) return;
  const g = pick(e);
  if (g !== hovered) {
    if (hovered && hovered !== selected) tint(hovered, null);
    hovered = g;
    if (g && g !== selected) tint(g, 0xffb3d9, 0.18);
    renderer.domElement.style.cursor = g ? "pointer" : "";
  }
});

// ------------------------------------------------------------------ overlaps (conservative world AABBs)
const EPS = 0.05;
function overlaps() {
  scene.updateMatrixWorld(true);       // Box3.setFromObject doesn't refresh the parents' matrices
  const items = [];
  const push = (o, owner) => {
    if (!o.isMesh || !o.visible || !o.userData.solid) return;
    const b = new THREE.Box3().setFromObject(o); b.expandByScalar(-EPS);
    items.push({ owner, name: o.name, b });
  };
  for (const [id, g] of Object.entries(groups)) g.traverse((o) => push(o, id));
  if (state.show.table) tableGroup.traverse((o) => { if (o.name === "Table top") push(o, "table"); });
  if (state.show.box) boxGroup.traverse((o) => { if (o.userData.wall || (o.userData.lid && state.show.lid)) { o.userData.solid = true; push(o, "box"); } });
  const STATIC = new Set(["table", "box"]);
  const hits = new Map();
  for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) {
    const a = items[i], b = items[j];
    if (a.owner === b.owner || (STATIC.has(a.owner) && STATIC.has(b.owner))) continue;
    if (a.b.intersectsBox(b.b)) {
      for (const [x, y] of [[a, b], [b, a]]) if (!STATIC.has(x.owner)) {
        if (!hits.has(x.owner)) hits.set(x.owner, new Set());
        hits.get(x.owner).add(STATIC.has(y.owner) ? y.owner : labelOf(y.owner));
      }
    }
  }
  return hits;
}
function labelOf(id) { return id.startsWith("brick") ? "brick " + (state.bricks.findIndex((b) => b.id === id) + 1) : PART_INFO[id].name; }

// ------------------------------------------------------------------ Geant4 export / import
const near = (v, w = 0, tol = 1e-3) => Math.abs(v - w) < tol;
const isIdentityRot = (s) => s.rot.every((a) => near(a));
function partFits(id) {
  const s = partState(id);
  if (id === "source" || id === "cebr3") return near(s.pos[0]) && near(s.pos[1]) && isIdentityRot(s);
  if (id === "fiber") return s.pos.every((v) => near(v)) && isIdentityRot(s);
  return false;                       // bricks always need the extension
}
const f3 = (v) => (Math.round(v * 1000) / 1000).toString();
function exportMacro() {
  const p = state.params, L = [];
  L.push(`# Bench geometry exported from Bench Buddy (bench_viewer), ${new Date().toISOString()}`);
  L.push("# Same commands as geometry.mac (lengths in mm). Use instead of geometry.mac:");
  L.push("#   /control/execute <this file>   then /cebr3/geom/holders|table|box as needed, /run/initialize");
  for (const [grp, keys] of DIM_GROUPS) {
    L.push(`# ${grp}`);
    for (const k of keys) L.push(`/cebr3/geom/${k} ${STRING_PARAMS.has(k) ? p[k] : f3(p[k])}`);
  }
  L.push("# optional parts (the run macros usually set these)");
  L.push(`/cebr3/geom/holders ${state.show.holders}`);
  L.push(`/cebr3/geom/table ${state.show.table}`);
  L.push(`/cebr3/geom/box ${state.show.box}`);
  const ext = [];
  for (const id of ["source", "fiber", "cebr3"]) if (!partFits(id)) {
    const s = state.parts[id];
    ext.push(`#/cebr3/place/${id} ${s.pos.map(f3).join(" ")} ${s.rot.map(f3).join(" ")}`);
  }
  for (const b of state.bricks)
    ext.push(`#/cebr3/brick/add ${b.material} ${b.dims.map(f3).join(" ")} ${b.pos.map(f3).join(" ")} ${b.rot.map(f3).join(" ")}`);
  if (ext.length) {
    L.push("#");
    L.push("# ---- Not supported by DetectorConstruction yet (commented out so this macro runs as is) ----");
    L.push("# Proposed commands, see bench_viewer/README.md. Positions in mm (Geant4 frame, fiber centre at 0),");
    L.push("# angles in deg, rotation R = Rz*Ry*Rx placed as G4Transform3D(R, t).");
    L.push("#   /cebr3/place/<part> x y z rx ry rz             part = source (origin: collimator exit face),");
    L.push("#                                                  fiber (fiber centre), cebr3 (front-can face)");
    L.push("#   /cebr3/brick/add <material> dx dy dz x y z rx ry rz   (box centred at x y z)");
    L.push(...ext);
  }
  return L.join("\n") + "\n";
}
function importMacro(text) {
  const s = defaultState(); s.bricks = []; s.show = { ...state.show };
  let sawGeom = false;
  for (let line of text.split(/\r?\n/)) {
    line = line.trim();
    const ext = line.startsWith("#/cebr3/");
    if (ext) line = line.slice(1);
    if (!line.startsWith("/cebr3/")) continue;
    const [cmd, ...args] = line.split(/\s+/);
    const m = cmd.match(/^\/cebr3\/geom\/(\w+)$/);
    if (m && !ext) {
      sawGeom = true;
      const k = m[1], v = args[0];
      if (k === "holders" || k === "table" || k === "box") { s.show[k] = /^(true|1)$/i.test(v); continue; }
      if (k in DEFAULT_PARAMS) s.params[k] = STRING_PARAMS.has(k) ? v : INT_PARAMS.has(k) ? parseInt(v, 10) : parseFloat(v);
      continue;
    }
    const pm = cmd.match(/^\/cebr3\/place\/(source|fiber|cebr3)$/);
    if (pm && args.length >= 6) { s.parts[pm[1]] = { pos: args.slice(0, 3).map(Number), rot: args.slice(3, 6).map(Number) }; s[`_placed_${pm[1]}`] = true; continue; }
    if (cmd === "/cebr3/brick/add" && args.length >= 10) {
      s.bricks.push({ id: "brick" + Date.now() + "_" + s.bricks.length, material: args[0], dims: args.slice(1, 4).map(Number),
                      pos: args.slice(4, 7).map(Number), rot: args.slice(7, 10).map(Number) });
    }
  }
  if (!sawGeom && !s.bricks.length) { toast("No /cebr3/ commands found 🤔"); return; }
  if (!s._placed_source) s.parts.source.pos = [0, 0, -s.params.collimatorToFiber];
  if (!s._placed_cebr3) s.parts.cebr3.pos = [0, 0, s.params.fiberToCeBr3];
  delete s._placed_source; delete s._placed_cebr3; delete s._placed_fiber;
  if (!text.includes("/cebr3/brick/add")) s.bricks = state.bricks;     // a plain geometry.mac keeps the bricks
  state = s; select(null); rebuildAll(); commit();
  toast("Loaded ✓");
}
function download(name, text) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
  a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

// ------------------------------------------------------------------ undo + autosave
const history = [];
const KEY = "bench-buddy-state-v1";
function commit() {
  const snap = JSON.stringify(state);
  if (history[history.length - 1] !== snap) history.push(snap);
  if (history.length > 100) history.shift();
  try { localStorage.setItem(KEY, snap); } catch (_) { /* storage unavailable */ }
  refreshUI();
}
function undo() {
  if (history.length < 2) { toast("Nothing to undo"); return; }
  history.pop();
  state = JSON.parse(history[history.length - 1]);
  const selId = selected?.userData.id;
  rebuildAll();
  select(selId && groups[selId] ? groups[selId] : null);
  try { localStorage.setItem(KEY, history[history.length - 1]); } catch (_) {}
}

// ------------------------------------------------------------------ UI
const $ = (q) => document.querySelector(q);
let toastTimer;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 1800); }

function refreshUI() { renderPartList(); renderDims(); renderSelected(); refreshLive(); }

function renderPartList() {
  const ul = $("#partList"), hits = overlaps();
  ul.innerHTML = "";
  const row = (id, emoji, name, sub, opts = {}) => {
    const li = document.createElement("li");
    if (opts.static) li.classList.add("static");
    if (selected && selected.userData.id === id) li.classList.add("sel");
    const badge = hits.has(id) ? `<span class="badge" title="overlaps ${[...hits.get(id)].join(", ")}">overlap</span>`
      : (!opts.static && !id.startsWith("brick") && !partFits(id)) ? `<span class="badge moved" title="needs the placement extension to export">moved</span>` : "";
    li.innerHTML = `<span class="em">${emoji}</span><span class="nm">${name}<small>${sub}</small></span>${badge}`;
    if (opts.toggle) {
      const b = document.createElement("button"); b.className = "eye"; b.textContent = state.show[opts.toggle] ? "👁" : "🙈";
      b.title = "show / hide"; b.onclick = (e) => { e.stopPropagation(); state.show[opts.toggle] = !state.show[opts.toggle]; applyShow(); commit(); };
      li.appendChild(b);
    }
    if (!opts.static) li.onclick = () => select(groups[id]);
    ul.appendChild(li);
  };
  for (const id of ["source", "fiber", "cebr3"]) row(id, PART_INFO[id].emoji, PART_INFO[id].name, PART_INFO[id].sub);
  state.bricks.forEach((b, i) => row(b.id, "🧱", `Brick ${i + 1}`, `${brickLabel(b)} · ${b.material.replace("G4_", "")}`));
  row("table", "🛠️", "Optical table", "honeycomb · 900 × 1200 mm", { static: true, toggle: "table" });
  row("box", "🪵", "Plywood box", "41 × 17 × 12 in", { static: true, toggle: "box" });
}
function brickLabel(b) {
  const inch = b.dims.map((d) => d / IN);
  return inch.every((v) => near(v, Math.round(v * 4) / 4, 1e-3)) ? inch.map((v) => +v.toFixed(2)).join("×") + " in" : b.dims.map((d) => d.toFixed(0)).join("×") + " mm";
}

function renderDims() {
  const form = $("#dimForm");
  if (form.dataset.built && document.activeElement?.closest?.("#dimForm")) return;   // don't fight typing
  form.innerHTML = ""; form.dataset.built = "1";
  for (const [grp, keys] of DIM_GROUPS) {
    const div = document.createElement("div"); div.className = "dimgroup";
    div.innerHTML = `<h4>${grp}</h4>`;
    for (const k of keys) {
      const r = document.createElement("div"); r.className = "dimrow" + (LINKED[k] ? " locked" : "");
      const isStr = STRING_PARAMS.has(k);
      r.innerHTML = `<span title="/cebr3/geom/${k}">${k}</span>`;
      let inp;
      if (k === "collimatorMaterial") {
        inp = document.createElement("select");
        for (const m of ["W97", "G4_W", "G4_Pb", "G4_Fe", "G4_STAINLESS-STEEL", "G4_Cu"]) inp.add(new Option(m, m));
      } else { inp = document.createElement("input"); inp.type = isStr ? "text" : "number"; inp.step = INT_PARAMS.has(k) ? "1" : "0.1"; }
      inp.value = state.params[k];
      if (LINKED[k]) inp.title = "Set by the part's z position (also editable here)";
      inp.onchange = () => {
        const v = isStr ? inp.value : INT_PARAMS.has(k) ? parseInt(inp.value, 10) : parseFloat(inp.value);
        if (!isStr && !Number.isFinite(v)) { inp.value = state.params[k]; return; }
        state.params[k] = v;
        if (k === "collimatorToFiber") state.parts.source.pos[2] = -v;
        if (k === "fiberToCeBr3") state.parts.cebr3.pos[2] = v;
        rebuildAll(); commit();
      };
      r.appendChild(inp); div.appendChild(r);
    }
    form.appendChild(div);
  }
}

function renderSelected() {
  const panel = $("#right");
  if (!selected) { panel.classList.add("hidden"); return; }
  panel.classList.remove("hidden");
  const id = selected.userData.id, s = partState(id), isBrick = selected.userData.kind === "brick";
  const info = isBrick ? PART_INFO.brick : PART_INFO[id];
  $("#selEmoji").textContent = info.emoji;
  $("#selName").textContent = isBrick ? `Brick ${state.bricks.indexOf(s) + 1}` : info.name;
  $("#selSub").textContent = isBrick ? "anything you like, off to the side" : info.sub;
  document.querySelectorAll("#right [data-k]").forEach((inp) => {
    if (document.activeElement === inp) return;
    const k = inp.dataset.k;
    inp.value = k[0] === "p" ? s.pos["xyz".indexOf(k[1])] : s.rot["xyz".indexOf(k[1])];
  });
  $("#brickBox").classList.toggle("hidden", !isBrick);
  $("#partDelete").classList.toggle("hidden", !isBrick);
  if (isBrick) {
    document.querySelectorAll("#brickBox [data-b]").forEach((inp) => { if (document.activeElement !== inp) inp.value = +s.dims[+inp.dataset.b].toFixed(2); });
    const sel = $("#brickPreset");
    if (!sel.options.length) { BRICK_PRESETS.forEach(([n], i) => sel.add(new Option(n, i))); sel.add(new Option("custom", "custom")); }
    const pi = BRICK_PRESETS.findIndex(([, d]) => d.every((v, j) => near(v * IN, s.dims[j], 0.05)));
    sel.value = pi >= 0 ? pi : "custom";
    $("#brickMat").value = s.material;
    const vol = s.dims[0] * s.dims[1] * s.dims[2] / 1000, kg = vol * (DENSITY[s.material] ?? 11.35) / 1000;
    $("#brickMass").textContent = `${vol.toFixed(0)} cm³ · ${kg.toFixed(1)} kg (${(kg * 2.2046).toFixed(1)} lb) 🏋️`;
  }
  const box = $("#mapBox"), fits = partFits(id);
  box.classList.toggle("ext", !fits);
  if (id === "source" && fits) box.innerHTML = `Exports as <code>/cebr3/geom/collimatorToFiber ${f3(state.params.collimatorToFiber)}</code>`;
  else if (id === "cebr3" && fits) box.innerHTML = `Exports as <code>/cebr3/geom/fiberToCeBr3 ${f3(state.params.fiberToCeBr3)}</code>`;
  else if (id === "fiber" && fits) box.innerHTML = `At the Geant4 origin, as in the simulation.`;
  else if (isBrick) box.innerHTML = `New in the model: exports as a commented <code>/cebr3/brick/add</code> line until DetectorConstruction learns it.`;
  else box.innerHTML = `Moved off-axis or rotated: exports as a commented <code>/cebr3/place/${id}</code> line (needs the placement extension).`;
}

function refreshLive() {
  // distances along the beam, and export compatibility
  const p = state.params, src = state.parts.source, ce = state.parts.cebr3, fb = state.parts.fiber;
  const d1 = fb.pos[2] - src.pos[2], d2 = ce.pos[2] - fb.pos[2];
  let html = `<span>☢️→🧵 collimator face → fiber axis <b>${d1.toFixed(1)} mm</b></span>` +
             `<span>🧵→🔮 fiber axis → CeBr₃ face <b>${d2.toFixed(1)} mm</b></span>`;
  if (state.bricks.length) {
    const b = state.bricks[0], dx = b.pos[0] - fb.pos[0], dz = b.pos[2] - fb.pos[2];
    html += `<span>🧱 brick 1 centre <b>(${b.pos.map((v) => v.toFixed(0)).join(", ")})</b>, ${Math.hypot(dx, dz).toFixed(0)} mm from fiber centre</span>`;
  }
  $("#dist").innerHTML = html;
  const hits = overlaps(), moved = ["source", "fiber", "cebr3"].filter((id) => !partFits(id)).length, nb = state.bricks.length;
  const c = $("#compat");
  if (hits.size) { c.className = "bad"; c.textContent = `Overlap: ${[...hits.keys()].map(labelOf).join(", ")}`; }
  else if (moved || nb) { c.className = "ext"; c.textContent = `Export needs the placement extension for ${[moved && `${moved} moved part${moved > 1 ? "s" : ""}`, nb && `${nb} brick${nb > 1 ? "s" : ""}`].filter(Boolean).join(" + ")}`; }
  else { c.className = "ok"; c.textContent = "Fits the current Geant4 code"; }
  // keep the list badges fresh while dragging
  if (dragging) renderPartList();
  if (selected) renderSelected();
}

// part inputs
document.querySelectorAll("#right [data-k]").forEach((inp) => inp.addEventListener("change", () => {
  if (!selected) return;
  const s = partState(selected.userData.id), k = inp.dataset.k, v = parseFloat(inp.value);
  if (!Number.isFinite(v)) return renderSelected();
  if (k[0] === "p") s.pos["xyz".indexOf(k[1])] = v; else s.rot["xyz".indexOf(k[1])] = v;
  if (selected.userData.id === "source") state.params.collimatorToFiber = -s.pos[2];
  if (selected.userData.id === "cebr3") state.params.fiberToCeBr3 = s.pos[2];
  applyTransforms(); commit(); renderDims();
}));
document.querySelectorAll("#brickBox [data-b]").forEach((inp) => inp.addEventListener("change", () => {
  const s = partState(selected.userData.id), v = parseFloat(inp.value);
  if (!(v > 0)) return renderSelected();
  s.dims[+inp.dataset.b] = v; fill(selected, buildBrick(s)); applyShow(); commit();
}));
$("#brickPreset").addEventListener("change", (e) => {
  if (e.target.value === "custom") return;
  const s = partState(selected.userData.id), d = BRICK_PRESETS[+e.target.value][1].map((v) => v * IN);
  const bottom = s.pos[1] - s.dims[1] / 2;                  // keep it standing where it was
  s.dims = d; s.pos[1] = +(bottom + d[1] / 2).toFixed(3);
  fill(selected, buildBrick(s)); applyTransforms(); applyShow(); commit();
});
$("#brickMat").addEventListener("change", (e) => { const s = partState(selected.userData.id); s.material = e.target.value; fill(selected, buildBrick(s)); applyShow(); commit(); });

document.querySelectorAll("[data-mode]").forEach((b) => b.onclick = () => setMode(b.dataset.mode));
function setMode(m) { gizmo.setMode(m); document.querySelectorAll("[data-mode]").forEach((x) => x.classList.toggle("active", x.dataset.mode === m)); }
$("#spaceBtn").onclick = toggleSpace;
function toggleSpace() { gizmo.setSpace(gizmo.space === "world" ? "local" : "world"); $("#spaceBtn").textContent = gizmo.space === "world" ? "World" : "Local"; }
$("#snapT").onchange = (e) => gizmo.setTranslationSnap(+e.target.value || null);
$("#snapR").onchange = (e) => gizmo.setRotationSnap(+e.target.value ? THREE.MathUtils.degToRad(+e.target.value) : null);
$("#deselect").onclick = () => select(null);
$("#partReset").onclick = () => {
  if (!selected) return;
  const id = selected.userData.id, d = defaultState();
  if (id.startsWith("brick")) { const s = partState(id), i = state.bricks.indexOf(s), nb = defaultBrick(i); s.pos = nb.pos; s.rot = nb.rot; }
  else { state.parts[id] = d.parts[id]; if (id === "source") state.params.collimatorToFiber = DEFAULT_PARAMS.collimatorToFiber; if (id === "cebr3") state.params.fiberToCeBr3 = DEFAULT_PARAMS.fiberToCeBr3; }
  applyTransforms(); commit(); renderDims();
};
$("#partDelete").onclick = () => {
  if (!selected || selected.userData.kind !== "brick") return;
  state.bricks = state.bricks.filter((b) => b.id !== selected.userData.id);
  select(null); rebuildAll(); commit(); toast("Brick removed 🧹");
};
$("#addBrick").onclick = () => {
  const b = defaultBrick(state.bricks.length); state.bricks.push(b); rebuildAll(); select(groups[b.id]); commit(); toast("New brick 🧱");
};
document.querySelectorAll("[data-toggle]").forEach((b) => b.onclick = () => { const k = b.dataset.toggle; state.show[k] = !state.show[k]; applyShow(); commit(); });
$("#undoBtn").onclick = undo;
$("#resetBtn").onclick = () => { if (!confirm("Reset everything to geometry.mac (bricks back to one)?")) return; state = defaultState(); select(null); rebuildAll(); commit(); toast("Back to geometry.mac ✓"); };
$("#exportBtn").onclick = () => { download("geometry_bench_buddy.mac", exportMacro()); toast("Macro downloaded 💾"); };
$("#loadBtn").onclick = () => $("#fileInput").click();
$("#fileInput").onchange = async (e) => { const f = e.target.files[0]; if (f) importMacro(await f.text()); e.target.value = ""; };
let dragDepth = 0;
addEventListener("dragenter", (e) => { e.preventDefault(); dragDepth++; $("#drop").classList.add("show"); });
addEventListener("dragleave", () => { if (--dragDepth <= 0) { dragDepth = 0; $("#drop").classList.remove("show"); } });
addEventListener("dragover", (e) => e.preventDefault());
addEventListener("drop", async (e) => { e.preventDefault(); dragDepth = 0; $("#drop").classList.remove("show"); const f = e.dataTransfer.files[0]; if (f) importMacro(await f.text()); });

addEventListener("keydown", (e) => {
  if (e.target.closest("input, select, textarea")) return;
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "z") { e.preventDefault(); undo(); return; }
  if (e.key === "w" || e.key === "W") setMode("translate");
  else if (e.key === "e" || e.key === "E") setMode("rotate");
  else if (e.key === "q" || e.key === "Q") toggleSpace();
  else if (e.key === "Escape") select(null);
  else if (e.key === "f" || e.key === "F") focusSel();
  else if ((e.key === "Delete" || e.key === "Backspace") && selected?.userData.kind === "brick") $("#partDelete").click();
});

// ------------------------------------------------------------------ camera views
const VIEWS = {
  iso: { pos: [300, 290, 520], tgt: [-55, -20, 55] },
  top: { pos: [0, 720, 30], tgt: [0, -20, 30] },
  side: { pos: [620, 20, 25], tgt: [0, -15, 25] },
  beam: { pos: [0, 30, -560], tgt: [0, -5, 20] },
};
let camAnim = null;
function goView(name) {
  const v = VIEWS[name];
  camAnim = { t: 0, fp: camera.position.clone(), ft: orbit.target.clone(), tp: new THREE.Vector3(...v.pos), tt: new THREE.Vector3(...v.tgt) };
  document.querySelectorAll("[data-view]").forEach((b) => b.classList.toggle("active", b.dataset.view === name));
}
function focusSel() {
  if (!selected) return;
  const c = new THREE.Box3().setFromObject(selected).getCenter(new THREE.Vector3());
  const off = camera.position.clone().sub(orbit.target).setLength(Math.min(450, camera.position.distanceTo(orbit.target)));
  camAnim = { t: 0, fp: camera.position.clone(), ft: orbit.target.clone(), tp: c.clone().add(off), tt: c };
}
document.querySelectorAll("[data-view]").forEach((b) => b.onclick = () => goView(b.dataset.view));
camera.position.fromArray(VIEWS.iso.pos); orbit.target.fromArray(VIEWS.iso.tgt);

// ------------------------------------------------------------------ boot
try {
  const saved = JSON.parse(localStorage.getItem(KEY) || "null");
  if (saved?.params && saved?.parts && saved?.bricks && saved?.show) state = saved;
} catch (_) { /* fresh start */ }
rebuildAll();
commit();

// keep the side panels below the (possibly wrapped) top bar
new ResizeObserver(() => {
  const r = document.getElementById("topbar").getBoundingClientRect();
  document.documentElement.style.setProperty("--top", `${Math.round(r.bottom + 10)}px`);
}).observe(document.getElementById("topbar"));

addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight); labels.setSize(innerWidth, innerHeight);
});
const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05);
  if (camAnim) {
    camAnim.t = Math.min(1, camAnim.t + dt * 2.2);
    const k = 1 - Math.pow(1 - camAnim.t, 3);
    camera.position.lerpVectors(camAnim.fp, camAnim.tp, k); orbit.target.lerpVectors(camAnim.ft, camAnim.tt, k);
    if (camAnim.t >= 1) camAnim = null;
  }
  orbit.update();
  updatePhotons(dt);
  axes.position.y = state.params.tableTop + 0.5;
  renderer.render(scene, camera);
  labels.render(scene, camera);
});

// for debugging in the console
window.bench = { get state() { return state; }, exportMacro, importMacro };
