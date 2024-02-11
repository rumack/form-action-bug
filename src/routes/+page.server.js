export const actions = {
  send_html: async ({ request }) => {
    console.log("In form action...");
    const data = await request.formData();
    // With node 18.19, the form action hangs because the above formdata request never resolves
    console.log(...data);

    return { success: true };
  },
};
