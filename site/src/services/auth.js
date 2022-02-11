export const TOKEN_KEY = '&app-token';
export const ID_CLIENTE = '&id-cliente';
export const NOME_CLIENTE = '&nome-cliente';

export const login = token => {localStorage.setItem(TOKEN_KEY,token); }
export const logout = () => {localStorage.clear() }

export const setIdCliente = id => localStorage.setItem(ID_CLIENTE,id);
export const getIdCliente = () => localStorage.getItem(ID_CLIENTE);

export const setNomeCliente = nome => localStorage.setItem(NOME_CLIENTE,nome);
export const getNomeCliente = () => localStorage.getItem(NOME_CLIENTE);

export const getToken = () => localStorage.getItem(TOKEN_KEY);