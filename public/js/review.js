const reviewCreateHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const review = document.querySelector('#review-descr').value.trim();
  const rating = document.querySelector('#rating-value').value.trim();

  if (review && rating) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify({ review, rating }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      console.log("Review Posted");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#add-review')
  .addEventListener('click', reviewCreateHandler);