import {Flex, Paper, Title, Text, Stack, Pill, Image} from "@mantine/core";

const myStack = ['React', 'Javascript', 'TypeScript', 'Redux Toolkit', 'React Router', 'Bootstrap', 'Mantine UI', 'SCSS Module', 'REST API', 'HTML/CSS', 'BEM', 'Vite', 'Webpack'];

const pillColors = [
    { bg: "#DCEBFA", color: "#315B83" },
    { bg: "#E5DDF8", color: "#634B91" },
    { bg: "#D9F0E7", color: "#326D54" },
    { bg: "#FBE5D5", color: "#925B32" },
    { bg: "#F8DDE8", color: "#914C6B" },
    { bg: "#DDF0F3", color: "#356B75" },
];


function About() {
    return (
        <Flex direction='column' gap={16} mx='auto' m={24} maw={700} pb={30}>
            <Paper p={24}>
                <Stack gap={12}>
                    <Title order={2}>Максим Петрушин</Title>
                    <Text>
                        Доброго времени суток!
                    </Text>
                    <Text>
                        Меня зовут Максим но моя жена называет меня "Сладкая Булочка"!
                        Возможно я самую малость отошел от темы...
                    </Text>
                    <Text>
                        Я посвятил себя Frontend-разработке и развиваюсь в направлении React и TypeScript. Создаю современные пользовательские интерфейсы и разбираюсь в архитектуре кода который (не смотря ни на что...) РАБОТАЕТ!!!
                    </Text>
                    <Stack gap={24}>
                        <Text>
                            Пытаюсь постоянно развивать свои навыки разработки и в данный момент работаю используя:
                        </Text>
                        <Flex gap={5} wrap="wrap">
                            {myStack.map((item, index) => {
                                const { bg, color } = pillColors[index % pillColors.length];

                                return (
                                    <Pill key={item} c={color} bg={bg}>
                                        {item}
                                    </Pill>
                                );
                            })}
                        </Flex>
                        <Text>
                            Сейчас продолжаю развивать навыки Frontend-разработки и расширять практический опыт на собственных проектах.
                        </Text>
                        <Text>
                            И на последок посмотрите на моих любимых питомцев, классные правда?)
                        </Text>
                        <Image src='/pets.heic' radius='md'/>
                    </Stack>
                </Stack>
            </Paper>
        </Flex>
    )
}

export default About