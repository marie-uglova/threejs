const widthPrimitiv1 =  0.5;
const heightPrimitiv1 =  1;
const depthPrimitiv1 =  1.5; // это по оси Z
const widthSegments1 =  9;
const heightSegments1 = 1;
const depthSegments1 = 4; // это по оси Z
const geometryPrimitiv1 = new THREE.BoxBufferGeometry(
    widthPrimitiv1, heightPrimitiv1, depthPrimitiv1, widthSegments1, heightSegments1, depthSegments1
);

const radius2 =  0.5;
const segments2 = 15;
const thetaStart2 = Math.PI * 0.26;
const thetaLength2 = Math.PI * 1.50;
const geometryPrimitiv2 = new THREE.CircleBufferGeometry(radius2, segments2, thetaStart2, thetaLength2);

const radius3 =  0.3;
const height3 =  1.0;
const radialSegments3 = 6;
const geometryPrimitiv3 = new THREE.ConeBufferGeometry(radius3, height3, radialSegments3);

const radius4 =  0.4;
const detail4 = 1;
const geometryPrimitiv4 = new THREE.DodecahedronBufferGeometry(radius4, detail4);

const points5 = [];
for (let i = 0; i < 5; ++i) {
    points5.push(new THREE.Vector2(Math.sin(i * 0.1) * 0.2 + 0.2, (i - 1) * .2));
}
const geometryPrimitiv5 = new THREE.LatheBufferGeometry(points5);