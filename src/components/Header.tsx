import {Grid, Text, NavLink, Group, Image, Paper, Badge} from "@mantine/core";
import { UserCircleIcon} from "@phosphor-icons/react"
import {Link, useMatch} from 'react-router'

import MainLogo from "../assets/MainLogo.png";

function Header() {

    const isAbout = useMatch('/about')
    const isVacancies = useMatch("/vacancies/*");


    return (
        <Paper shadow='sm' radius={0}>
            <Grid align="center" columns={3} px={20}>
                <Grid.Col span={1} h={60}>
                    <Group h="100%" align="center" wrap="nowrap" gap='xs'>
                        <Image
                            w={30}
                            h={30}
                            src={MainLogo}
                            alt="FrontEnd"
                        />
                        <Text fw={600}>.FrontEnd</Text>
                    </Group>
                </Grid.Col>

                <Grid.Col span={1} h={60}>
                    <Group
                        h="100%"
                        justify="center"
                        align="center"
                        wrap="nowrap"
                    >
                        <NavLink
                            component={Link}
                            to='/vacancies'
                            opacity={isAbout ? '0.5' : '1'}
                            onClick={(event) => {
                                if (isVacancies) {
                                    event.preventDefault();
                                }
                            }}
                            w="max-content"
                            label="Вакансии FE"
                            rightSection={
                                isVacancies && (
                                    <Badge
                                        w={6}
                                        h={6}
                                        circle
                                        bg="primary"
                                    />
                                )
                            }
                        />

                        <NavLink
                            component={Link}
                            to='/about'
                            opacity={isVacancies ? '0.5' : '1'}
                            onClick={(event) => {
                                if (isAbout) {
                                    event.preventDefault();
                                }
                            }}
                            w="max-content"
                            label="Обо мне"
                            leftSection={<UserCircleIcon/>}
                            rightSection={
                                isAbout && (
                                    <Badge
                                        w={6}
                                        h={6}
                                        circle
                                        bg="primary"
                                    />
                                )
                            }
                        />
                    </Group>
                </Grid.Col>

                <Grid.Col span={1} h={60} />
            </Grid>
        </Paper>
    );
}

export default Header;