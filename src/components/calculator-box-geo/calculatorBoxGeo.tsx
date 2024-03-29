import { GroupProps } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import "./calculatorBoxGeo.css";
import {
  addSign,
  updateOperation,
  clearSign,
  checkDots,
  changeOperator,
  addToHistory,
  SignType,
  storeSign,
  replaceStoreSign
} from "../../features/signSlice";

import { AppDispatch } from "../../store/store";

import CalcButton from "../calc-button";

type Buttons = {
  sign?: SignType;
  text: string;
  color?: string;
} & GroupProps;

const CalculatorBoxGeo: React.FC<Buttons> = (props: Buttons) => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Group>(null!);
  const ref2 = useRef<THREE.Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const Calculate = (value: string) => {
    switch (value) {
      case "AC":
        dispatch(clearSign());
        break;
      case "^_^":
        window.open("https://www.pavlienko.com");
        break;
      case "MRC":
        dispatch(storeSign());
        break;
      case "M+":
        dispatch(replaceStoreSign())
        break;
      case "%":
      case "-":
      case "+":
      case "*":
      case "/":
        dispatch(updateOperation(value));
        break;
      case ".":
        dispatch(checkDots(value));
        break;
      case "+/-":
        dispatch(changeOperator());
        break;
      case "=":
        props.sign
          ? props.sign.operation === "/" && Number(props.sign.b) === 0
            ? alert("No way!")
            : dispatch(addToHistory(props.sign))
          : console.log("wow");
        break;
      default:
        dispatch(addSign(value));
    }
  };

  return (
    <group {...props} ref={ref}>
      <mesh ref={ref2} position={[-0.8, 0, 0]} rotation-z={[Math.PI / 50]}>
        <boxBufferGeometry attach="geometry" args={[1, 12, 12]} />
        <meshBasicMaterial visible={false} />
      </mesh>
      <mesh
        userData={{
          data: props.text,
        }}
        castShadow
        receiveShadow
        scale={[clicked ? 2.4 : 1, 1, 1]}
        onClick={() => {
          Calculate(props.text);
          click(!clicked);
        }}
        onPointerOver={() => {
          click(true);
          hover(true);
        }}
        onPointerOut={() => {
          click(false);
          hover(false);
        }}
      >
        {props.color === "lightgreen" ? undefined : (
          <CalcButton
            color={hovered ? "pink" : props.color ? props.color : undefined}
          />
        )}

        <group
          rotation-z={
            props.color === "lightgreen" ? [-Math.PI / 45] : [Math.PI / 30]
          }
        >
          <Html
            center
            transform={true}
            rotation-y={[Math.PI / 2]}
            position={[0.01, 0, 0]}
            occlude={[ref2]}
            className={
              props.color
                ? props.color === "lightgreen"
                  ? "calc-display"
                  : "calc-symbols"
                : "calc-symbols-black"
            }
            wrapperClass="calc-symbols-wrapper"
          >
            {props.text}
          </Html>
        </group>
      </mesh>
    </group>
  );
};

export default CalculatorBoxGeo;
