import { Container, Divider, Flex, Grid, Stack, Tabs } from "@mantine/core";
import SearchField from "../components/SearchField.tsx";
import SkillList from "../components/SkillList.tsx";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import {
  fetchVacancy,
  getFiltersFromUrl,
  setFilters,
  setCity,
} from "../store/vacancySlice.ts";
import { Outlet } from "react-router";

function Vacancies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isInitial = useRef(false);

  const filters = useAppSelector((state) => state.vacancy.filters);
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = location.pathname.split("/")[2] ?? null;
  const pathSplit = location.pathname.split("/");
  const cityFromPath =
    pathSplit[2] === "moscow" || pathSplit[2] === "petersburg"
      ? pathSplit[2]
      : null;
  const city =
    cityFromPath === "moscow"
      ? "Москва"
      : cityFromPath === "petersburg"
        ? "Санкт-Петербург"
        : "";

  useEffect(() => {
    if (isInitial.current) return;
    const urlFilters = getFiltersFromUrl(searchParams);
    urlFilters.city = city;

    dispatch(setFilters(urlFilters));
    // dispatch(fetchVacancy(urlFilters));

    const params = new URLSearchParams();

    params.set("skills", urlFilters.skills.join(","));

    if (urlFilters.search) params.set("search", urlFilters.search);
    if (urlFilters.page !== 1) params.set("page", String(urlFilters.page));
    if (params.toString() !== searchParams.toString()) {
      setSearchParams(params, { replace: true });
    }
    isInitial.current = true;
  }, [searchParams, setSearchParams, dispatch]);

  useEffect(() => {
    if (filters.city !== city) {
      return;
    }
    console.log("Второй useEffect:", filters);
    dispatch(fetchVacancy(filters));
  }, [filters, dispatch, city]);

  useEffect(() => {
    if (filters.city === city) return;

    dispatch(setCity(city));
  }, [city, filters.city, dispatch]);

  console.log(cityFromPath);
  console.log(city);

  return (
    <>
      <Container size={1000}>
        <SearchField />
      </Container>
      <Divider my="xs" opacity="0.7" m={0} mb={24} />
      <Container size={1000} pb={85}>
        <Flex justify="center">
          <Tabs
            allowTabDeactivation
            value={activeTab}
            w="fit-content"
            onChange={(value) => {
              const query = searchParams.toString();
              navigate(
                value ? `/vacancies/${value}?${query}` : `/vacancies?${query}`,
              );
            }}
          >
            <Tabs.List justify="center" m={24}>
              <Tabs.Tab value="moscow">Москва</Tabs.Tab>
              <Tabs.Tab value="petersburg">Санкт-Петербург</Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Flex>
        <Grid>
          <Grid.Col span={4}>
            <Stack>
              <SkillList />
            </Stack>
          </Grid.Col>
          <Grid.Col span={8}>
            <Outlet />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export default Vacancies;
