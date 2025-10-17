# Server Directory Structure

This directory contains all backend-related code for the LifeStyle Hub application.

## Directory Structure

```
server/
├── index.ts                    # Main server exports
├── controllers/                # Request handlers and business logic
│   └── authController.ts      # Authentication controllers
├── lib/                       # Utility libraries
│   ├── auth/                  # Authentication utilities
│   │   └── utils.ts           # JWT, password hashing, validation
│   └── db/                    # Database utilities
│       └── connection.ts      # MongoDB connection
├── middleware/                # Express-like middleware
│   └── auth.ts               # Authentication middleware
└── models/                    # Database models
    └── User.ts               # User model and schema
```

## Usage

### Importing Server Components

```typescript
// Import database connection
import connectDB from '@/server/lib/db/connection';

// Import models
import User from '@/server/models/User';

// Import auth utilities
import { hashPassword, verifyToken } from '@/server/lib/auth/utils';

// Import controllers
import { registerUser, loginUser } from '@/server/controllers/authController';

// Import middleware
import { requireAuth, requireAdmin } from '@/server/middleware/auth';

// Or import everything from index
import { connectDB, User, hashPassword } from '@/server';
```

## Controllers

Controllers handle the business logic and are called by API routes. They:

- Connect to the database
- Validate input data
- Process requests
- Return appropriate responses

## Models

Database models define the structure and validation rules for data. They use Mongoose schemas and include:

- Field definitions
- Validation rules
- Indexes for performance
- Custom methods

## Middleware

Middleware functions that can be used to:

- Authenticate requests
- Authorize users
- Validate data
- Handle errors

## Utilities

Helper functions for common operations like:

- Password hashing and comparison
- JWT token generation and verification
- Email and input validation
- Random string generation
