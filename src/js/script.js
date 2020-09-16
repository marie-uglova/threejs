window.onload = function () {

    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvas = document.getElementById('canvas');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    var renderer = new THREE.WebGL1Renderer({canvas: canvas});
    renderer.setClearColor(0x000000);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000); // угол обзора, пропорции, расстояние с/по которого видно объект
    camera.position.set(0, 0, 1000); // координаты по x, y, z

    var light = new THREE.AmbientLight(0xffffff); // рассеянный свет
    scene.add(light);

    var geometry = new THREE.SphereGeometry(200, 12, 12); // ширина, высота, кол-во фрагментов

    var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true}); // цвет, видно грани (пустотелый объект)

    var mesh = new THREE.Mesh (geometry, material);
    scene.add(mesh);

    renderer.render(scene, camera);

}
