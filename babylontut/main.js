import * as BABYLON from "@babylonjs/core";

const canvas = document.getElementById("renderCanvas");

const engine = new BABYLON.Engine(canvas);

const createScene = async function () {
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true, false, true);
  // scene.createDefaultLight();
  // // const camera = new BABYLON.UniversalCamera(
  // //   "camera",
  // //   new BABYLON.Vector3(0, 5, -10),
  // //   scene
  // // );
  // const camera = new BABYLON.ArcRotateCamera(
  //   "camera",
  //   0,
  //   0,
  //   10,
  //   new BABYLON.Vector3(0, 0, 0),
  //   scene
  // );
  // camera.attachControl(true);
  // // camera.inputs.addMouseWheel();
  // // camera.setTarget(BABYLON.Vector3.Zero());

  // camera.setPosition(new BABYLON.Vector3(0, 0, -20));

  // camera.lowerBetaLimit = Math.PI / 4;
  // camera.upperBetaLimit = Math.PI / 2;

  // camera.lowerRadiusLimit = 20;
  // camera.upperRadiusLimit = 50;

  // PARAMETERS FOR A BOX //

  // const box = new BABYLON.MeshBuilder.CreateBox("myBox", {
  //   size: 0.1,
  //   width: 2,
  //   height: 0.05,
  //   depth: 0.5,
  //   faceColors: [new BABYLON.Color4(1, 0, 0, 1), BABYLON.Color3.Green()],
  // });

  // PARAMETERS FOR A SPHERE //

  const sphere = new BABYLON.MeshBuilder.CreateSphere(
    "mySphere",
    { segments: 50, diameter: 0.5 },
    scene
  );

  const sphereMaterial = new BABYLON.StandardMaterial();
  sphere.material = sphereMaterial;

  sphereMaterial.diffuseTexture = new BABYLON.Texture(
    "/RockWall_baseColor.png"
  );

  // sphereMaterial.diffuseColor = new BABYLON.Color3(0, 1, 0);
  // sphereMaterial.specularColor = new BABYLON.Color3(1, 0, 0);

  // sphereMaterial.ambientColor = new BABYLON.Color3(0, 1, 1);
  // scene.ambientColor = new BABYLON.Color3(0, 1, 0.5);

  // sphereMaterial.emissiveColor = new BABYLON.Color3(0, 1, 0);

  // sphereMaterial.alpha = 0.2;

  // sphereMaterial.wireframe = true;

  // PARAMETERS FOR A PLANE //

  // const ground = new BABYLON.MeshBuilder.CreateGround("", {
  //   height: 10,
  //   width: 10,
  //   subdivisions: 5,
  // });

  // ground.material = new BABYLON.StandardMaterial();
  // ground.material.wireframe = true;

  // PARAMETERS FOR A HEIGHMAP //

  // const groundFromHM = new BABYLON.MeshBuilder.CreateGroundFromHeightMap(
  //   "",
  //   "/Canyon.png",
  //   { height: 10, width: 10, subdivisions: 50, maxHeight: 2 }
  // );

  // groundFromHM.material = new BABYLON.StandardMaterial();
  // groundFromHM.material.wireframe = true;

  // PARAMETERS FOR TEXT //

  // const fontData = await (await fetch("/Montserrat_Regular.json")).json();
  // const text = BABYLON.MeshBuilder.CreateText("", "My Text", fontData, {
  //   size: 2,
  //   depth: 0.1,
  //   resolution: 64,
  // });

  return scene;
};

const scene = await createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});
