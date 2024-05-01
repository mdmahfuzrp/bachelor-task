import { useMutation, useQueryClient } from "react-query";

export const deleteHelper = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(
    async (endpoint) => {
      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("projects");
      },
    }
  );

  return { deleteMutation };
};
