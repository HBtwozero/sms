let allUsers = [];
let item;
let itemTeacher;
allStudents = [];
allTeachers = [];
let auth;
let user_index = 0;
let host = 'localhost';
let port = '8001';
let moment = require('moment');
let Swal = require('sweetalert2');
let { ipcRenderer } = require('electron');
let Store = require('electron-store');
const remote = require('electron').remote;
const app = remote.app;
let img_path = app.getPath('appData') + '/sms/uploads/';
let img_pathTeacher = app.getPath('appData') + '/sms/uploads/teachers/';
let api = 'http://' + host + ':' + port + '/api/';
let btoa = require('btoa');
let auth_error = 'Incorrect username or password';
let auth_empty = 'Please enter a username and password';
let storage = new Store();
let user = {};
let start = moment().startOf('month');
let end = moment();
let start_date = moment(start).toDate();
let end_date = moment(end).toDate();




auth = storage.get('auth');
user = storage.get('user');

$(document).ready(function() {




    loadStudents();
    loadTeachers();


    function loadStudents() {
        $.get(api + 'eleves/eleves', function(data) {

            allStudents = [...data];
            $('#parent').text('');
            data.forEach(item => {
                let item_info = `<div class="card">
            <img src="${item.img==""?"./assets/images/default.jpg" : img_path+item.img}" id="student_img" class="card-img-top" alt="..." style="height:150px; width:250px">
            <div class="card-body">
                <h5 class="card-title">Name: ${item.firstname +" "+item.lastname}</h5>
                <p class="card-text">Phone: ${item.phone}</p>
                <p class="card-text">Email: ${item.email}</p>
                <p class="card-text">Bio:${item.shortbio}</p>
            </div>
            <div class="card-footer">
                <button class="btn btn-danger">Delete</button>
            </div>
             </div>`;
                $('#parent').append(item_info);
            });


        })
    }

    function loadTeachers() {
        $.get(api + 'teachers/teachers', function(data) {

            allTeachers = [...data];
            $('#parents').text('');
            data.forEach((itemTeacher, index) => {
                let itemTeacher_info = `<tr><td>
            <div class="form-check">
                <input type="checkbox" class="form-check-input">
                <label class="form-check-label">${itemTeacher._id}</label>
            </div>
        </td>

       
        <td class="text-center"><img src="${itemTeacher.img == ""? "./assets/images/default.jpg" : img_pathTeacher+itemTeacher.img}"></td>
        <td>${itemTeacher.firstname}</td>
        <td>${itemTeacher.gender}</td>
        <td>2</td>
        <td>${itemTeacher.dob}</td>
        <td>A</td>
        <td>TA-107 Newyork</td>
        <td>${itemTeacher.phone}</td>
        <td>${itemTeacher.email}</td>
        <td>
            <div class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <span class="flaticon-more-button-of-three-dots"></span>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#"><i class="fas fa-times text-orange-red"></i>Close</a>
                    <a class="dropdown-item" href="#"><i class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                    <a class="dropdown-item" href="#"><i class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                </div>
            </div>
        </td></tr>`;
                $('#parents').append(itemTeacher_info);

            });
        })
    }



    $('#saveStudent').submit(function(e) {
        e.preventDefault();
        $(this).attr('action', api + 'eleves/eleve');
        $(this).attr('method', 'POST');

        $(this).ajaxSubmit({
            // url: api + 'eleves/eleve',
            // type: 'POST',
            // data: JSON.stringify(stuData),
            contentType: 'application/json',
            // cache: false,
            // processData: false,
            success: function(response) {
                $('#saveStudent').get(0).reset();
                $('#current_img').text('');

                Swal.fire("Student added!", "Student added successfully!", "success");

            },
            error: function(response) {

                Swal.fire('Error', 'Something went wrong please try again', 'error')
            }
        })

    })
    $('#saveteacher').submit(function(e) {
        e.preventDefault();
        $(this).attr('action', api + 'teachers/teacher');
        $(this).attr('method', 'POST');

        $(this).ajaxSubmit({
            contentType: 'application/json',
            success: function(response) {
                $('#saveteacher').get(0).reset();
                $('#current_img').text('');

                Swal.fire("Teacher added!", "Teacher added successfully!", "success");

            },
            error: function(response) {

                Swal.fire('Error', 'Something went wrong please try again', 'error')
            }
        })

    })


})