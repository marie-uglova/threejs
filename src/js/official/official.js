////=include official-primitives.js
////=include official-primitives-multiple.js
//=include solar-system.js

/*window.onload = function () {

    const canvas = document.querySelector('#canvas');
    const renderer = new THREE.WebGLRenderer({canvas});

    const fov = 75; // fov (field of view) определяется высота ближайшей и дальней плоскостей
    const aspect = 2;  // соотношение сторон, по умолчанию 300 на 150
    const near = 0.1; // ближайшее пространство
    const far = 1000; // самое дальнее пространство
    // получается усеченная пирамида, на отрезанную верхушку которой смотрит камера
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2.5; // отодвигаем камеру вверх, чтобы смотреть вниз

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

    const boxWidth = 0.5;
    const boxHeight = 0.5;
    const boxDepth = 0.5;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    function makeInstance(geometry, color, x, y) {
        const material = new THREE.MeshPhongMaterial({color});

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.x = x;
        cube.position.y = y;

        return cube;
    }

    function makeInstancePrimitiv1(geometry, color, x, y) {
        const material = new THREE.MeshBasicMaterial({color, wireframe: true});

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.x = x;
        cube.position.y = y;

        return cube;
    }

    const cubes = [
        makeInstancePrimitiv1(geometryPrimitiv1, 0x44aa88,  -0.5, 0.5),
        makeInstance(geometry, 0x8844aa, -2.2, 0.8),
        makeInstancePrimitiv1(geometryPrimitiv2, 0x3498db,  1, 0.8),
        makeInstancePrimitiv1(geometryPrimitiv3, 0xf55123,  2, 0.8),
        makeInstancePrimitiv1(geometryPrimitiv4, 0xf91155,  -2, -0.8),
        makeInstance(geometryPrimitiv5, 0xffe500,  -0.8, -0.8),
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

}*/
