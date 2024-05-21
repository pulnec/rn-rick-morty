import React, { useEffect, useState } from 'react'
import { Services } from '../services/services'
import { ICharacterItem } from '../services/services.props';
import { useToast } from "react-native-toast-notifications";

export default function useCharacters() {
  const toast = useToast();
  const [characters, setCharacters] = useState<ICharacterItem[]>([]);
  const [dataPage, setDataPage] = useState<ICharacterItem[]>([]);
  const [info, setInfo] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string | null>(null);

  const isLastPage = info ? page - 1 === info.pages : false;

  const getCharactersByName = async (name: string) => {
    try {
      if (name === '') {
        resetFilter();
        return;
      }
      setPage(1);
      setLoading(true);
      setName(name);
      const { data } = await Services.characters({ page: 1, name });
      setCharacters([]);
      setInfo(data.info);
      setDataPage(data.results);
    } catch {
      setLoading(false);
      setName(null);
      toast.show(`No se encontraron resultados`, { type: "danger",  placement: "top" });
    }
  }

  const resetFilter = () => {
    setDataPage([]);
    setCharacters([]);
    setName(null);
    getCharacters({ page: 1 });
  }

  const getCharacters = async (params: any) => {
    try {
      setLoading(true);
      const { data } = await Services.characters(params);
      setInfo(data.info);
      setDataPage(prevState => {
        return [...prevState, ...data.results]
      });
    } catch {
      setLoading(false);
    }
  }

  const paginate = (items: any, page = 1, perPage = 10) => items.slice(perPage * (page - 1), perPage * page);

  useEffect(() => {
    if (dataPage.length) {
      getCharactersValues();
    }
  },[dataPage]);


  const getCharactersValues = () => {
    const values = paginate(dataPage, page);

    if (!values.length) {
      getCharacters({ page: page-1, name });
      return;
    }
    setCharacters((prevState) => {
      return [...prevState, ...values]
    });
    let pageNumber = page + 1;
    setPage(pageNumber);
    setLoading(false);
  }

  return {
    characters,
    getCharactersValues,
    isLastPage,
    loading,
    getCharactersByName,
  }
}
