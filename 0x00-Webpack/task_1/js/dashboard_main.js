// js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function () {
  // Adding elements to the page body
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startBtn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Function to update the counter
  const updateCounter = _.debounce(() => {
    const count = parseInt($('#count').text()) || 0;
    $('#count').text(`${count + 1} clicks on the button`);
  }, 1000);

  // Bind the updateCounter function to the click event on the button
  $('#startBtn').on('click', updateCounter);
});
