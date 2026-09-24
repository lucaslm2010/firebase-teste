const firebaseConfig = {
  apiKey: "AIzaSyAQKRqD5W6lXudcKwtRvGssw-DHAE_qECI",
  authDomain: "senai-teste-ee679.firebaseapp.com",
  projectId: "senai-teste-ee679",
  storageBucket: "senai-teste-ee679.firebasestorage.app",
  messagingSenderId: "235259405588",
  appId: "1:235259405588:web:7b7534fe78a48684f3ce01"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ experimentalForceLongPolling: true });

async function addData() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const age = document.getElementById('age').value;
   const city = document.getElementById('city').value;
  
  

  try {
    const docRef = await db.collection('users').add({
      name: name,
      age: Number.parseInt(age, 10)
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
}

async function getData() {
  try {
    const querySnapshot = await db.collection('users').get();
    const dataList = document.getElementById('data-list');
    dataList.innerHTML = '';

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const listItem = document.createElement('li');
      listItem.textContent = `${data.name}, ${data.age}`;
      dataList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
}

window.addData = addData;
window.getData = getData;