import * as BABYLON from "@babylonjs/core";

const canvas = document.getElementById("renderCanvas");

const engine = new BABYLON.Engine(canvas);

const createScene = function () {
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true, false, true);

  // PARAMETERS FOR A BOX //

  // const box = new BABYLON.MeshBuilder.CreateBox("myBox", {
  //   size: 0.1,
  //   width: 2,
  //   height: 0.05,
  //   depth: 0.5,
  //   faceColors: [new BABYLON.Color4(1, 0, 0, 1), BABYLON.Color3.Green()],
  // });

  // PARAMETERS FOR A SPHERE //

  // const sphere = new BABYLON.MeshBuilder.CreateSphere(
  //   "mySphere",
  //   { segments: 50, diameter: 0.5 },
  //   scene
  // );

  // PARAMETERS FOR A PLANE //

  // const ground = new BABYLON.MeshBuilder.CreateGround("", {
  //   height: 10,
  //   width: 10,
  //   subdivisions: 5,
  // });

  // ground.material = new BABYLON.StandardMaterial();
  // ground.material.wireframe = true;

  return scene;
};

const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});
