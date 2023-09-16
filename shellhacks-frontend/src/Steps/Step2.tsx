import { Button, Flex, Stack, Text, Image } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

type Step2Props = {
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
}) => {
  const selectedFileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
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
        console.log(readerEvent.target.result as string);
        setIsSelected(true);
        setLoading(false);
      }
    };
  };

  const checkImageOrientation = () => {
    const img = document.getElementById("myImage"); // Replace with your image ID or reference
    if (img) {
      const { naturalWidth, naturalHeight } = img;
      setIsPortrait(naturalHeight > naturalWidth);
    }
  };

  const getDimensions = (dimension: string) => {
    if (isPortrait && dimension == "height") {
      return { base: "500px", md: "600px" };
    } else if (isPortrait && dimension == "width") {
      return { base: "flex", md: "flex" };
    } else if (isPortrait === false && dimension == "width") {
      return { base: "500px", md: "600px" };
    } else if (isPortrait && dimension == "height") {
      return { base: "flex", md: "flex" };
    }
  };

  const sendForm = async () => {
    setBackendLoading(true);
    await fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentSport, selectedFile }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBackendLoading(false);
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
            <Flex width={{ base: "80%", md: "50%" }}>
              {selectedFile && (
                <video controls>
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
                  // sendForm();
                  setCurrentStep(3);
                }}
                // isLoading={backendLoading}
                // isDisabled={isSelected ? false : true}
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
          <Button
            variant={"main"}
            onClick={() => {
              setCurrentStep(1);
            }}
          >
            TESTING BUTTON: Pick different Sport
          </Button>
          <Text align="center" mt={5} ml={12} mr={12} color="#828282">
            Upload a video of your {currentSport} form. Make sure you are
            capturing a clear angle of the activity that matches the recommended
            angle below.
          </Text>

          <Image
            id="myImage"
            m={5}
            onLoad={checkImageOrientation}
            width={getDimensions("width")}
            height={getDimensions("height")}
            src={`${currentSport}1.png`}
          />
        </Stack>
      )}
    </Stack>
  );
};
export default Step2;
