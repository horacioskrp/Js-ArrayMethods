"use strict";

let users = [
  {
    _id: "62d354e69d30d6927c7e4c91",
    isActive: false,
    balance: "$3,487.83",
    age: 33,
    eyeColor: "brown",
    name: "Elise Rhodes",
    gender: "female",
    company: "INSECTUS",
    email: "eliserhodes@insectus.com",
    phone: "+1 (921) 517-2126",
    address: "879 Eldert Street, Tetherow, Iowa, 1879",
  },
  {
    _id: "62d354e6bcc4f36b1c6eb533",
    isActive: false,
    balance: "$1,819.37",
    age: 35,
    eyeColor: "blue",
    name: "Gordon Melton",
    gender: "male",
    company: "NSPIRE",
    email: "gordonmelton@nspire.com",
    phone: "+1 (946) 431-3048",
    address: "254 Nixon Court, Crumpler, New Hampshire, 9220",
  },
  {
    _id: "62d354e6804dce292ef85445",
    isActive: true,
    balance: "$3,819.57",
    age: 40,
    eyeColor: "blue",
    name: "Cathy Horne",
    gender: "female",
    company: "QUADEEBO",
    email: "cathyhorne@quadeebo.com",
    phone: "+1 (878) 557-2074",
    address: "909 Schweikerts Walk, Iola, Texas, 2297",
  },
];

console.log("|||||||||||||||||| JS ARRAY METHODS ||||||||||||||||||");

//console.log(users);

/**
 * push() adds items to the end
 */
users.push({
  _id: "62d354e6c10938cec593ef68",
  isActive: true,
  balance: "$2,132.14",
  age: 40,
  eyeColor: "blue",
  name: "Foster Dixon",
  gender: "male",
  company: "ORONOKO",
  email: "fosterdixon@oronoko.com",
  phone: "+1 (986) 441-2768",
  address: "132 Kansas Place, Joppa, North Dakota, 4733",
});

//push multiple items

users.push(
  {
    _id: "62d354e67a9a31dc0e3e3fd6",
    isActive: false,
    balance: "$3,711.38",
    age: 31,
    eyeColor: "green",
    name: "Tami Cohen",
    gender: "female",
    company: "ELITA",
    email: "tamicohen@elita.com",
    phone: "+1 (965) 438-3450",
    address: "730 Bennet Court, Newkirk, Washington, 5662",
  },
  {
    _id: "62d354e6fb0cf8f29f1a8ed6",
    isActive: false,
    balance: "$3,180.38",
    age: 28,
    eyeColor: "blue",
    name: "Barrett Ellison",
    gender: "male",
    company: "ISOSPHERE",
    email: "barrettellison@isosphere.com",
    phone: "+1 (931) 522-3015",
    address: "329 Williams Place, Wadsworth, South Carolina, 8618",
  }
);

//console.log(users);

/**
 * pop() – extracts an item from the end,
 */

users.pop();

//console.log(users);

/**
 * shift() – extracts an item from the beginning,
 */

users.unshift({
  _id: "62d358e50e518f255b676333",
  isActive: false,
  balance: "$1,971.62",
  age: 29,
  eyeColor: "blue",
  name: "Fisher Albert",
  gender: "male",
  company: "BARKARAMA",
  email: "fisheralbert@barkarama.com",
  phone: "+1 (933) 445-3852",
  address: "531 Jerome Street, Rockingham, Northern Mariana Islands, 5311",
});

// unshit mutiple items
users.unshift(
  {
    _id: "62d358e50753e637d5577f7e",
    isActive: false,
    balance: "$2,203.98",
    age: 31,
    eyeColor: "green",
    name: "Doyle Nguyen",
    gender: "male",
    company: "BISBA",
    email: "doylenguyen@bisba.com",
    phone: "+1 (928) 509-3201",
    address: "276 Tiffany Place, Alleghenyville, Palau, 7151",
  },
  {
    _id: "62d358e59e59de3ce5c895bf",
    isActive: true,
    balance: "$3,069.07",
    age: 28,
    eyeColor: "green",
    name: "Wilkinson Hernandez",
    gender: "male",
    company: "ISOSTREAM",
    email: "wilkinsonhernandez@isostream.com",
    phone: "+1 (954) 596-3959",
    address: "212 Evans Street, Tedrow, Illinois, 6163",
  }
);

//console.log(users)

/**
 * splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
 */

users.splice(1, 2); // from the index 1 remove 2 element

//users add user function to add new users: use it after splice methode
//addUser(users);

// remove 3 first elements and replace them with another
users.splice(0, 3, {
    "_id": "62d358e536b2f81861935d42",
    "isActive": false,
    "balance": "$1,955.92",
    "age": 32,
    "eyeColor": "blue",
    "name": "Knapp Byrd",
    "gender": "male",
    "company": "BOINK",
    "email": "knappbyrd@boink.com",
    "phone": "+1 (847) 527-2697",
    "address": "946 College Place, Tetherow, New Jersey, 8623"
  },
  {
    "_id": "62d358e591a27a4fda760572",
    "isActive": false,
    "balance": "$2,804.45",
    "age": 25,
    "eyeColor": "blue",
    "name": "Melody Thompson",
    "gender": "female",
    "company": "DIGIAL",
    "email": "melodythompson@digial.com",
    "phone": "+1 (913) 582-3899",
    "address": "887 Sandford Street, Watrous, Michigan, 4343"
  },);

//console.log(users);


/**
 * slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
 */
users.slice(0,3);


/**
 * concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
*/

let newuserdb = users.concat(  {
    "_id": "62d358e5db0c043bec5bb1c0",
    "isActive": false,
    "balance": "$2,774.40",
    "age": 20,
    "eyeColor": "brown",
    "name": "Delia Sullivan",
    "gender": "female",
    "company": "MAGNEMO",
    "email": "deliasullivan@magnemo.com",
    "phone": "+1 (957) 517-2327",
    "address": "862 Bay Street, Williston, Puerto Rico, 4728"
  });

  let data = [];

  let newuserdb2 = data.concat(
    [
        {
            "_id": "62d35f14c0c5497e0c981770",
            "isActive": false,
            "balance": "$3,192.40",
            "age": 25,
            "eyeColor": "brown",
            "name": "Conway Compton",
            "gender": "male",
            "company": "BUZZOPIA",
            "email": "conwaycompton@buzzopia.com",
            "phone": "+1 (968) 584-3175",
            "address": "645 Portland Avenue, Neahkahnie, Alabama, 3202"
          },
          {
            "_id": "62d35f140b39141a8668f230",
            "isActive": false,
            "balance": "$1,883.55",
            "age": 32,
            "eyeColor": "brown",
            "name": "Petty Herrera",
            "gender": "male",
            "company": "APEX",
            "email": "pettyherrera@apex.com",
            "phone": "+1 (801) 496-2183",
            "address": "852 Lacon Court, Gardners, Federated States Of Micronesia, 2727"
          } 
    ],
    [
        {
            "_id": "62d35f14e0035732bc004bf1",
            "isActive": true,
            "balance": "$1,602.06",
            "age": 29,
            "eyeColor": "brown",
            "name": "Miranda Small",
            "gender": "male",
            "company": "ZILLATIDE",
            "email": "mirandasmall@zillatide.com",
            "phone": "+1 (931) 568-2429",
            "address": "960 Guider Avenue, Bagtown, Puerto Rico, 9736"
          }
    ]
  )

console.log(newuserdb2);



/**
 * function help add new user to the array
 * @param {array} arraydata 
 */
function addUser(arraydata) {
  users.push(
    {
      _id: "62d354e6c10938cec593ef68",
      isActive: true,
      balance: "$2,132.14",
      age: 40,
      eyeColor: "blue",
      name: "Foster Dixon",
      gender: "male",
      company: "ORONOKO",
      email: "fosterdixon@oronoko.com",
      phone: "+1 (986) 441-2768",
      address: "132 Kansas Place, Joppa, North Dakota, 4733",
    },

    {
      _id: "62d354e67a9a31dc0e3e3fd6",
      isActive: false,
      balance: "$3,711.38",
      age: 31,
      eyeColor: "green",
      name: "Tami Cohen",
      gender: "female",
      company: "ELITA",
      email: "tamicohen@elita.com",
      phone: "+1 (965) 438-3450",
      address: "730 Bennet Court, Newkirk, Washington, 5662",
    },
    {
      _id: "62d354e6fb0cf8f29f1a8ed6",
      isActive: false,
      balance: "$3,180.38",
      age: 28,
      eyeColor: "blue",
      name: "Barrett Ellison",
      gender: "male",
      company: "ISOSPHERE",
      email: "barrettellison@isosphere.com",
      phone: "+1 (931) 522-3015",
      address: "329 Williams Place, Wadsworth, South Carolina, 8618",
    }
  );
}
