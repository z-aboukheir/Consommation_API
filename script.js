// Récupérer tous les posts avec fetch
fetch('https://jsonplaceholder.typicode.com/posts', {
    headers: {
        'Accept': 'application/json'
    }
})
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.error('Error:', error));

    
// Récupérer le post avec l’id 7 avec Axios
axios.get('https://jsonplaceholder.typicode.com/posts/7')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));

// Créer un post avec Axios
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1
}, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));

// Mettre à jour le post 7 avec Axios
axios.put('https://jsonplaceholder.typicode.com/posts/7', {
    id: 7,
    title: 'foo',
    body: 'bar',
    userId: 1
}, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));

// Mettre à jour le title du post 7 avec Axios
axios.patch('https://jsonplaceholder.typicode.com/posts/7', {
    title: 'new title'
}, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));

// Supprimer le post 7 avec Axios
axios.delete('https://jsonplaceholder.typicode.com/posts/7', {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
    .then(response => console.log('Post deleted'))
    .catch(error => console.error('Error:', error));

