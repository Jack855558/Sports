const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("secret_api_key");

const params = {
    q: "manchester united",
    location: "wichita, kansas, united states",
    api_key: "5ff85d95ac6777f62c7849140caaa5f4fad541ab8290c25309562dc92253ca92",
    hl: "en",
    gl: "us",
    google_domain: "google.com"
};

const callback = function (data) {
    console.log(data);
};

// Show result as JSON
search.json(params, callback);