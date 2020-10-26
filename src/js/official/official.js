//=include official-primitives.js

window.onload = function () {

    const canvas = document.querySelector('#canvas');
    const renderer = new THREE.WebGLRenderer({canvas});

    const fov = 75; // fov (field of view) определяется высота ближайшей и дальней плоскостей
    const aspect = 2;  // соотношение сторон, по умолчанию 300 на 150
    const near = 0.1; // ближайшее пространство
    const far = 5; // самое дальнее пространство
    // получается усеченная пирамида, на отрезанную верхушку которой смотрит камера
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2; // отодвигаем камеру вверх, чтобы смотреть вниз

    const scene = new THREE.Scene();

    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        // свет имеет положение и цель
        light.position.set(-1, 2, 4); // положение источника света
        // цель по умолчанию (0, 0, 0), т.е. светит по направлению в началау координат
        scene.add(light);
    }

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    function makeInstance(geometry, color, x) {
        const material = new THREE.MeshPhongMaterial({color});

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.x = x;

        return cube;
    }

    const cubes = [
        makeInstance(geometry, 0x44aa88,  0),
        makeInstance(geometry, 0x8844aa, -2),
        makeInstance(geometry, 0xaa8844,  2),
    ];

    // совпадает ли размер холста c размером окна
    function resizeRendererToDisplaySize(renderer) {
        const drawingbuffer = renderer.domElement;
        const width = drawingbuffer.clientWidth;
        const height = drawingbuffer.clientHeight;
        const needResize = drawingbuffer.width !== width || drawingbuffer.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false); // false нужен, чтобы уменьшить производительность (половинное разрешение)
        }
        return needResize;
    }

    //const material = new THREE.MeshBasicMaterial({color: 0x44aa88}); // MeshBasicMaterial не восприимчив к свету
    //const material = new THREE.MeshPhongMaterial({color: 0x44aa88});

    //const cube = new THREE.Mesh(geometry, material); // комбинация формы объекта и материала

    //scene.add(cube); // добавляем Mesh на сцену

    //renderer.render(scene, camera); // отрисовка

    function render(time) {
        time *= 0.001;  // шаг в 0.001 секунды

        if (resizeRendererToDisplaySize(renderer)) {
            const drawingbuffer = renderer.domElement;
            camera.aspect = drawingbuffer.clientWidth / drawingbuffer.clientHeight; // соотношение сторон по размеру холста
            camera.updateProjectionMatrix();
        }

        cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * .1;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
        });

        //cube.rotation.x = time;
        //cube.rotation.y = time;

        renderer.render(scene, camera); // отрисовка

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render); // просим браузер анимировать куб

}
