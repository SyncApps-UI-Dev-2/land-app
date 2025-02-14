import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const api = axios.create({
  baseURL: 'https://syncapi.co/api/Land',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Reusable hooks for different operations
export function useGet(key, url, options = {}) {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await api.get(url);
      return data;
    },
    ...options,
  });
}

export function usePost(key, url) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async data => {
      const response = await api.post(url, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
}

export function usePut(key, url) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async data => {
      const response = await api.put(url, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
}

export function useDelete(key, url) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async id => {
      const response = await api.delete(`${url}/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
}


