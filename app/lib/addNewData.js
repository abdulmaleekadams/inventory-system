const baseURL = 'http://localhost:3000/api';
export const addNewData = async (apiPath, setIsSubmitting, reset, data) => {
  try {
    setIsSubmitting(true);
    const response = await fetch(`${baseURL}/${apiPath}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const dataFromResponse = await response.json();
      console.log(dataFromResponse);
      setIsSubmitting(false);
      reset();
    }
  } catch (error) {
    setIsSubmitting(false);
    console.log(error);
  } finally {
    setIsSubmitting(false);
  }
};
