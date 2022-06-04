console.log("welcome")


const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

function cviterators(profiles) {
    let nextindex = 0;
    return {
        next: function () {
            return nextindex < profiles.length ?
                { value: profiles[nextindex++], done: false } :
                { done: true }
        }
    };
}
let candidates = cviterators(data);
nextCv();
const next = document.getElementById("next");
next.addEventListener("click", nextCv)

function nextCv() {
    let currentCandidate = candidates.next().value;
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src="${currentCandidate.image}" alt="#">`
        profile.innerHTML = `<ul class="list-group">
                                    <li class="list-group-item">Name: ${currentCandidate.name}</li>
                                    <li class="list-group-item">${currentCandidate.age} years old</li>
                                    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                                    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
                                    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
                         </ul>`;
    }
    else {
        alert("end of applicants list");
        window.location.reload();
    }
}