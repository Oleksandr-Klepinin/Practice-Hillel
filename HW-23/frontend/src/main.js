import axios from 'axios';
import $ from "jquery";

const API_URL = 'http://localhost:5000/todos';

$('#get').on('click', async () => {
    const res = await axios.get(API_URL)
    $('#response1').text(JSON.stringify(res.data, null, 2))
})
$('#get_id').on('click', async () => {
    const res = await axios.get(`${API_URL}/${$('#todo_id').val()}`)
    $('#response2').text(JSON.stringify(res.data, null, 2))
})
$('#post').on('click', async () => {
    const res = await axios.post(API_URL, {
        text: $('#todo_text').val(),
        checkbox: false,
    })
})
$('#put_id').on('click', async () => {
    const res = await axios.put(`${API_URL}/${$('#todo_id').val()}`, {
        text: $('#todo_text').val(),
    })
    $('#response2').text(JSON.stringify(res.data, null, 2))
})
$('#delete_id').on('click', async () => {
    const res = await axios.delete(`${API_URL}/${$('#todo_id').val()}`)
    $('#response2').text(JSON.stringify(res.data, null, 2))
})