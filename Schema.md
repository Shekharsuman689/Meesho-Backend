
DB DESIGN

User
- id : ObjectId
- name : String
- password : String
- email : String, Unique
- number : number
- role: ["admin", "user", "super-admin"]


Product
- id : ObjectId
- title: string
- image: string
- category: string
- description: string
- price: number
- rating: number


Product Category
- id : ObjectID
- name : String