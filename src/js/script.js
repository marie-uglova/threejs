window.onload = function () {

    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvas = document.getElementById('canvas');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    var ball = {
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
    };

    var gui = new dat.GUI();
    // это настройки интерфейса gui
    gui.add(ball, 'positionX').min(-5).max(5).step(0.1);
    gui.add(ball, 'positionY').min(-5).max(5).step(0.1);
    gui.add(ball, 'positionZ').min(-5).max(5).step(0.1);
    gui.add(ball, 'rotationX').min(-0.2).max(0.2).step(0.001);
    gui.add(ball, 'rotationY').min(-0.2).max(0.2).step(0.001);
    gui.add(ball, 'rotationZ').min(-0.2).max(0.2).step(0.001);

    var renderer = new THREE.WebGL1Renderer({canvas: canvas});
    renderer.setClearColor(0x000000);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000); // угол обзора, пропорции, расстояние с/по которого видно объект
    camera.position.set(0, 0, 1000); // координаты по x, y, z

    var light = new THREE.AmbientLight(0xffffff); // рассеянный свет
    scene.add(light);

    var geometry = new THREE.SphereGeometry(200, 12, 12); // ширина, высота, кол-во фрагментов

    //var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true}); // цвет, видно грани (пустотелый объект)
    var material = new THREE.MeshBasicMaterial({color: 0xffffff, vertexColors: THREE.FaceColors}); // задать граням разные цвета

    /*for (var i = 0; i < geometry.faces.length; i++) {
        geometry.faces[i].color.setRGB (Math.random(), Math.random(), Math.random());
    }*/
    for (let item of geometry.faces) {
        item.color.setRGB (Math.random(), Math.random(), Math.random());
    }

    var mesh = new THREE.Mesh (geometry, material);
    scene.add(mesh);

    function loop() {
        //mesh.position.x += 1; // += означает, что смещение происходит при каждом запуске loop
        mesh.position.x += ball.positionX; // изменения берем из специального объекта
        mesh.position.y += ball.positionY;
        mesh.position.z += ball.positionZ;
        mesh.rotation.x += ball.rotationX;
        mesh.rotation.y += ball.rotationY;
        mesh.rotation.z += ball.rotationZ;
        renderer.render(scene, camera);
        requestAnimationFrame(function() {loop();}) // функция loop вызывается снова и снова, когда браузер готов
    }

    loop();

}
