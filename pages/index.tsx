import React, { useState } from "react";
import { Box, Flex, Input } from "@chakra-ui/react";
import QRcode from "react-qr-code";

export default function Home() {
  const [data, setData] = useState("");

  return (
    <Flex padding={50} alignItems="center" justifyContent="center">
      <Flex
        width={500}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Input
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <Box style={{ marginTop: "2em" }}>
          <QRcode value={data} />
        </Box>
      </Flex>
    </Flex>
  );
}
