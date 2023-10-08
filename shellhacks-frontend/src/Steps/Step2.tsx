import { Button, Flex, Stack, Text, Image } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import * as process from 'process';

type Step2Props = {
  setResult: (input: any) => void;
  setCurrentStep: (input: number) => void;
  setSelectedFile: (input: string) => void;
  selectedFile: string | undefined;
  currentSport: string;
};

const Step2: React.FC<Step2Props> = ({
  setCurrentStep,
  setSelectedFile,
  selectedFile,
  currentSport,
    setResult
}) => {
  const selectedFileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [backendLoading, setBackendLoading] = useState(false);

  const onSelectVideo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const reader = new FileReader();

    if (event.target.files?.[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      if (readerEvent.target?.result) {
        setSelectedFile(readerEvent.target.result as string);
        setIsSelected(true);
        setLoading(false);
      }
    };
  };



  const sendForm = async () => {
    setBackendLoading(true);

    await fetch("/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentSport, selectedFile }),
    })
      .then((response) => response.json())
      .then((data) => {
        setBackendLoading(false);
        setResult(data);
        setCurrentStep(3);
      });
  };

  return (
    <Stack align="center" justify={"center"} mt={20} width="100%" height="100%">
      <input
        ref={selectedFileRef}
        type="file"
        hidden
        onChange={onSelectVideo}
      />
      {isSelected ? (
        <>
          <Flex
            align="center"
            justify={"space-around"}
            direction={{ base: "column", md: "row" }}
          >
            <Flex maxWidth={"400px"} maxHeight={"500px"}>
              {selectedFile && (
                <video
                 controls>
                  <source src={selectedFile} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}{" "}
            </Flex>
            <Stack ml={5} mr={5} mt={5} width={{ base: "200px", md: " 500px" }}>
              <Button
                onClick={() => selectedFileRef.current?.click()}
                backgroundColor="#d9d9d9"
                color="black"
                _hover={{ color: "#4f47e4", backgroundColor: "#8c8c8c" }}
                isLoading={loading}
              >
                Select a Different Video
              </Button>
              <Button
                onClick={() => {
                  sendForm();
                  // setCurrentStep(3);
                }}
                isLoading={backendLoading}
                isDisabled={isSelected ? false : true}
                variant={"main"}
              >
                Confirm Video
              </Button>
              <Text
                display={{ base: "none", md: "flex" }}
                align="center"
                mt={5}
                ml={12}
                mr={12}
                color="#828282"
              >
                Upload a video of your {currentSport} form. Make sure you are
                capturing a clear angle of the activity that matches the
                recommended angle.
              </Text>
            </Stack>
          </Flex>
        </>
      ) : (
        <Stack align={"center"} width="100%">
          <Button
            width="300px"
            onClick={() => selectedFileRef.current?.click()}
            variant={"main"}
          >
            Upload a ~10 second long video
          </Button>

          <Text align="center" mt={5} ml={12} mr={12} color="#828282">
            Upload a video of your {currentSport} form. Make sure you are
            capturing a clear angle of the activity that matches the recommended
            angle below.
          </Text>

          <Image
            id="myImage"
            m={5}
            maxWidth={"500px"} maxHeight={"500px"}
            src={`/static/${currentSport.toLowerCase()}1.png`}
          />
        </Stack>
      )}
    </Stack>
  );
};
export default Step2;
