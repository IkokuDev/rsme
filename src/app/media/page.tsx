import { Fragment } from "react";
import { Cover } from "@/components/layout/media/cover";
import { Contact } from "@/components/layout/media/contact";
import { Hero } from "@/components/layout/media/hero";
import { SaleTag02Icon } from "hugeicons-react";
import { Box, Button} from "@chakra-ui/react";

import { Tooltip } from "@/components/ui/tooltip"

export default function Media() {
  return (
    <Fragment>
      <Hero />
      <Cover />
      <Contact />
       <Box
              position="fixed"
              top="50%"
              right="-60px"
              transform="translateX(-50%)"
              zIndex="overlay"
            >
              <Tooltip
                content="Ticketing opens July 1, 2025"
                positioning={{ placement: "left" }}
              >
                <Button
                  bg="summit-secondary"
                  color="white"
                  size="lg"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  fontSize="small"
                  px={4}
                  _hover={{ bg: "accent.hover" }}
                  borderRadius="full"
                  boxShadow="lg"
                >
                  Buy Ticket
                  <Box color="white">
                    <SaleTag02Icon size={20} />
                  </Box>
                </Button>
              </Tooltip>
            </Box>
    </Fragment>
  );
}
