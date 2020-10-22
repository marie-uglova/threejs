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

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const material = new THREE.MeshBasicMaterial({color: 0x44aa88});

    const cube = new THREE.Mesh(geometry, material); // комбинация формы объекта и материала

    scene.add(cube); // добавляем Mesh на сцену

    renderer.render(scene, camera); // отрисовка

}
