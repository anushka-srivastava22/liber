import { TimeIcon } from "@chakra-ui/icons";
import {
    Box,
    Image,
    Heading,
    
    Text,
} from "@chakra-ui/react";

import { useState } from "react";

export default function TriviaCard(props) {
    var timeleft ="";
    var dest = new Date("aug 12, 2022 10:00:00").getTime();
    var x = setInterval(function() {
    var now = new Date().getTime();
   
    var diff = dest - now;

    var days = Math.floor(diff/(1000*60*60*24));
    console.log(days);
    var hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    console.log(hours);
    var mins = Math.floor((diff%(1000*60*60))/(1000*60));
    console.log(mins);
    var sec = Math.floor((diff%(1000*60))/(1000));
    console.log(sec);
    timeleft = days + "D : "+ hours + "H : " + mins + "M : " + sec + "S ";
    },5000);

    return (

        <Box
            bg="#821b9110"
            p="1"
            borderRadius="50"
            boxShadow="md"
            cursor="pointer"
            style={{
                border: "1px solid #00000050",
                backdropFilter: "blur(5px)",
            }}
        >
            <Image
                height="120px"
                width="100%"
                borderTopRadius="50"
                objectFit="cover"
                src= {props.triviaDetail.imgurl}
                alt="Dan Abramov"
            />
            
            <Box px="2">
                <Heading as="h4" size="md" pt="2">
                    {props.title}
                </Heading>
                


                <Box
                    w="100%"
                    size="xs"
                    
                >
                    <Text
                        fontSize="xs"
                        m="2"
                        pt="2"
                    >
                        <TimeIcon boxSize={4}/> {props.triviaDetail.sdate}
                    </Text>
                </Box>

                <Box
                    w="100%"
                    size="xs"
                    
                >
                    <Text
                        fontSize="xs"
                        m="2"
                        pt="2"
                    >
                        <TimeIcon boxSize={4}/> {timeleft}
                    </Text>
                </Box>

            </Box>
        </Box>

    )
}