import { Grid, GridItem } from '@chakra-ui/react';
import LeftPanel from './LeftPanel'
import MainPanel from './MainPanel'

export default function Dashboard() {
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={2}>
            <GridItem w='100%'>
                <LeftPanel/>
            </GridItem>
            <GridItem colSpan={4} w='100%'>
                <MainPanel/>
            </GridItem>
        </Grid>
    );
}