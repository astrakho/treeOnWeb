import './styles/styles.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var loader = new GLTFLoader();

loader.load( 'src/assets/Tree.glb', function ( gltf ) {

  scene.add( gltf.scene );
  renderer.render( scene, camera );

}, function ( xhr ) {

  console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

}, function ( error ) {

	console.error( error );

} );