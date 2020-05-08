# Back-End Architecture

```Begin: 09:00 4/8/2020```
```Begin: 09:30 4/8/2020```

## Users

- Route: Register user
- POST api/user
- Access: PUBLIC

## Auth

- Route: Get logged in user
- GET api/auth
- Access: PRIVATE

- Route: Authenticate user and get token
- POST api/auth
- Access: PUBLIC

## User-Journey

- Route: Get all entries
- GET api/user-journey
- Access: PRIVATE

- Route: Create an entry
- POST api/user-journey
- Access: PRIVATE

- Route: Delete an entry
- POST api/user-journey/:id
- Access: PRIVATE

## POST-MVP (goals or routine section?)