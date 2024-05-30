import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import { Inspector } from "@babylonjs/inspector";

const canvas = document.getElementById("renderCanvas");

const engine = new BABYLON.Engine(canvas);

const createScene = async function () {
  const scene = new BABYLON.Scene(engine);

  // scene.createDefaultCameraOrLight(true, false, true);
  // scene.createDefaultLight();
  // // const camera = new BABYLON.UniversalCamera(
  // //   "camera",
  // //   new BABYLON.Vector3(0, 5, -10),
  // //   scene
  // // );
  const camera = new BABYLON.ArcRotateCamera(
    "camera",
    0,
    0,
    10,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );
  camera.attachControl(true);
  // // camera.inputs.addMouseWheel();
  // // camera.setTarget(BABYLON.Vector3.Zero());

  camera.setPosition(new BABYLON.Vector3(0, 0, -20));

  // camera.lowerBetaLimit = Math.PI / 4;
  // camera.upperBetaLimit = Math.PI / 2;

  // camera.lowerRadiusLimit = 20;
  // camera.upperRadiusLimit = 50;

  //PARAMETERS FOR A BOX//

  // const box = new BABYLON.MeshBuilder.CreateBox("myBox", {
  //   size: 0.7,
  // width: 2,
  // height: 0.05,
  // depth: 0.5,
  // faceColors: [new BABYLON.Color4(1, 0, 0, 1), BABYLON.Color3.Green()]
  //   faceUV: [
  //     new BABYLON.Vector4(0, 0, 1 / 6, 1),
  //     new BABYLON.Vector4(1 / 6, 0, 2 / 6, 1),
  //     new BABYLON.Vector4(2 / 6, 0, 3 / 6, 1),
  //     new BABYLON.Vector4(3 / 6, 0, 4 / 6, 1),
  //     new BABYLON.Vector4(4 / 6, 0, 5 / 6, 1),
  //     new BABYLON.Vector4(5 / 6, 0, 1, 1),
  //   ],
  //   wrap: true,
  // });

  // const boxCatMat = new BABYLON.StandardMaterial();
  // box.material = boxCatMat;
  // boxCatMat.emissiveTexture = new BABYLON.Texture("/Texture.png");

  // box.position.x = 1;
  // box.position = new BABYLON.Vector3(-1, 0.5, 0);

  // box.rotation.x = Math.PI / 4;
  // box.rotation = new BABYLON.Vector3(0, 0, Math.PI / 6);

  // box.scaling.y = 2;
  // box.scaling = new BABYLON.Vector3(2, 0.5, 1);

  const utilLayer = new BABYLON.UtilityLayerRenderer(scene);

  // const positionGizmo = new BABYLON.PositionGizmo();
  // positionGizmo.attachedMesh = box;

  // const rotationGizmo = new BABYLON.RotationGizmo(utilLayer);
  // rotationGizmo.attachedMesh = box;

  // const scaleGizmo = new BABYLON.ScaleGizmo(utilLayer);
  // scaleGizmo.attachedMesh = box;

  // const planeGizmo = new BABYLON.PlaneRotationGizmo(
  //   new BABYLON.Vector3(0, 1, 0),
  //   BABYLON.Color3.Red(),
  //   utilLayer
  // );
  // planeGizmo.attachedMesh = box;

  //PARAMETERS FOR A SPHERE//

  const sphere = new BABYLON.MeshBuilder.CreateSphere(
    "mySphere",
    { segments: 50, diameter: 0.5 },
    scene
  );
  sphere.position = new BABYLON.Vector3(1, 1.5, 0);

  // const sphereMaterial = new BABYLON.StandardMaterial();
  // sphere.material = sphereMaterial;

  // sphereMaterial.diffuseTexture = new BABYLON.Texture(
  //   "/RockWall_baseColor.png"
  // );

  // sphereMaterial.diffuseColor = new BABYLON.Color3(0, 1, 0);
  // sphereMaterial.specularColor = new BABYLON.Color3(1, 0, 0);

  // sphereMaterial.ambientColor = new BABYLON.Color3(0, 1, 1);
  // scene.ambientColor = new BABYLON.Color3(0, 1, 0.5);

  // sphereMaterial.emissiveColor = new BABYLON.Color3(0, 1, 0);

  // sphereMaterial.alpha = 0.2;

  // sphereMaterial.wireframe = true;

  //PARAMETERS FOR A PLANE//

  const ground = new BABYLON.MeshBuilder.CreateGround("", {
    height: 5,
    width: 10,
    subdivisions: 5,
    subdivisionsX: 10,
  });

  // const groundCatMat = new BABYLON.StandardMaterial();
  // ground.material = groundCatMat;
  // groundCatMat.diffuseTexture = new BABYLON.Texture("/terracota.jpg");

  // groundCatMat.diffuseTexture.uOffset = 1.4;
  // groundCatMat.diffuseTexture.vOffset = 1.4;

  // groundCatMat.diffuseTexture.uScale = 5;
  // groundCatMat.diffuseTexture.vScale = 5;

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

  //PARAMETERS FOR ANIMATION OPTION 01//

  // scene.registerBeforeRender(function () {
  //   box.rotation.x += 0.01;
  //   box.rotation.y += 0.01;
  //   box.rotation.z += 0.01;
  // });

  //PARAMETERS FOR ANIMATION OPTION 02//

  // BABYLON.Animation.CreateAndStartAnimation(
  //   "xScaleAnimation",
  //   box,
  //   "scaling.x",
  //   30,
  //   120,
  //   0,
  //   2,
  //   BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
  //   new BABYLON.CircleEase()
  // );

  //PARAMETERS FOR ANIMATION OPTION 03//

  // const animation = new BABYLON.Animation(
  //   "yRotAnimation",
  //   "rotation.y",
  //   30,
  //   BABYLON.Animation.ANIMATIONTYPE_FLOAT,
  //   BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
  // );

  // const animationKeys = [];

  // animationKeys.push({
  //   frame: 0,
  //   value: 0,
  // });

  // animationKeys.push({
  //   frame: 120,
  //   value: 2 * Math.PI,
  // });

  // animation.setKeys(animationKeys);

  // box.animations = [];
  // box.animations.push(animation);
  // scene.beginAnimation(box, 0, 120, true);

  //PARAMETERS FOR A POINT LIGHT//

  // const light = new BABYLON.PointLight(
  //   "pointLight",
  //   new BABYLON.Vector3(0, 1, 0),
  //   scene
  // );

  //PARAMETERS FOR A SPOT LIGHT//

  // const light = new BABYLON.SpotLight(
  //   "spotLight",
  //   new BABYLON.Vector3(0, 1, 0),
  //   new BABYLON.Vector3(0, -1, 0),
  //   Math.PI / 3,
  //   2,
  //   scene
  // );
  // light.range = 10;

  //PARAMETERS FOR A DIRECTIONAL LIGHT//

  const light = new BABYLON.DirectionalLight(
    "directionalLight",
    new BABYLON.Vector3(-2, -3, 0),
    scene
  );
  light.intensity = 1;

  //PARAMETERS FOR AMBIENT LIGHT//

  // const light = new BABYLON.HemisphericLight(
  //   "hemisphericLight",
  //   new BABYLON.Vector3(-5, 5, 0),
  //   scene
  // );
  // light.groundColor = new BABYLON.Color3(0, 1, 0);

  // light.diffuse = new BABYLON.Color3(0, 0, 1);
  // light.specular = new BABYLON.Color3(0, 1, 0);

  const lightGizmo = new BABYLON.LightGizmo(utilLayer);
  lightGizmo.light = light;

  const shadowGenerator = new BABYLON.ShadowGenerator(1024, light);

  shadowGenerator.addShadowCaster(sphere);
  ground.receiveShadows = true;

  // shadowGenerator.setDarkness(0.5);
  shadowGenerator.useBlurExponentialShadowMap = true;
  shadowGenerator.useKernelBlur = true;
  shadowGenerator.blurKernel = 64;

  // scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
  // scene.fogStart = 10;
  // scene.fogEnd = 60;

  scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
  scene.fogDensity = 0.04;
  scene.fogColor = new BABYLON.Color3(0.3, 0.2, 0.6);

  scene.onPointerDown = function castRay() {
    const hit = scene.pick(scene.pointerX, scene.pointerY);

    if (hit.pickedMesh && hit.pickedMesh.name === "mySphere") {
      hit.pickedMesh.material = new BABYLON.StandardMaterial();
      hit.pickedMesh.material.diffuseColor = BABYLON.Color3.Red();
    }
  };

  BABYLON.SceneLoader.ImportMesh(
    "",
    "/",
    "Cow.gltf",
    scene,
    function (meshes, particleSystems, skeletons, animationGroups) {
      const model = meshes[0];
      model.scaling = new BABYLON.Vector3(0.25, 0.25, 0.25);

      animationGroups[5].play(true);
    }
  );

  BABYLON.SceneLoader.ImportMeshAsync("", "/", "Cow.gltf", scene).then(
    (result) => {
      const importedAnimGroups = result.animationGroups;
      importedAnimGroups[3].play(true);
    }
  );

  const bgMusic = new BABYLON.Sound(
    "CaptainJoz",
    "/CaptainJoz.mp3",
    scene,
    null,
    {
      loop: true,
      autoplay: true,
    }
  );

  return scene;
};

const scene = await createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});

Inspector.Show(scene, {});
