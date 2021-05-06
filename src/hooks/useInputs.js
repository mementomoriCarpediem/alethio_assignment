import { useState, useCallback } from 'react';

export default function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const handleInput = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, handleInput, reset];
}
