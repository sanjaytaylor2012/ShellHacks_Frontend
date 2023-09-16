import Step1 from "@/Steps/Step1";
import Step2 from "@/Steps/Step2";
import Step3 from "@/Steps/Step3";
import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentSport, setCurrentSport] = useState("");
  const [selectedFile, setSelectedFile] = useState<string>();
  const [result, setResult] = useState();
  return (
    <>
      <Flex m={10} align="center" justify={"space-around"}>
        <Flex
          width="40px"
          height="40px"
          backgroundColor="#d1d1d1"
          borderRadius={"50%"}
          align="center"
          justify="center"
          borderWidth={currentStep === 1 ? "5px" : "0px"}
          borderColor={"#2c99ec"}
        >
          <Text color="black">1</Text>
        </Flex>
        <Flex border="1px" borderColor={"white"} flexGrow={1}></Flex>

        <Flex
          width="40px"
          height="40px"
          backgroundColor="#d1d1d1"
          borderRadius={"50%"}
          align="center"
          justify="center"
          borderWidth={currentStep === 2 ? "5px" : "0px"}
          borderColor={"#2c99ec"}
        >
          <Text color="black">2</Text>
        </Flex>
        <Flex border="1px" borderColor={"white"} flexGrow={1}></Flex>

        <Flex
          width="40px"
          height="40px"
          backgroundColor="#d1d1d1"
          borderRadius={"50%"}
          align="center"
          justify="center"
          borderWidth={currentStep === 3 ? "5px" : "0px"}
          borderColor={"#2c99ec"}
        >
          <Text color="black">3</Text>
        </Flex>
      </Flex>
      {currentStep === 1 && (
        <Step1
          setCurrentSport={setCurrentSport}
          currentSport={currentSport}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 2 && (
        <Step2
          setCurrentStep={setCurrentStep}
          setSelectedFile={setSelectedFile}
          selectedFile={selectedFile}
          currentSport={currentSport}
        />
      )}
      {currentStep === 3 && <Step3 />}
    </>
  );
};
export default index;
