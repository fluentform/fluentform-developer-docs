# What is Fluent Forms?

<Badge type="tip" vertical="top" text="Fluent Forms Core" /> <Badge type="warning" vertical="top" text="Basic" />

Fluent Forms is a user-friendly drag-and-drop WordPress contact form plugin with more than 30 form fields, 3rd party integrations, built-in entry management system, etc. With Fluent Forms, you can create forms, payment forms, and quizzes in minutes.
## Fluent Forms Versions

Fluent Forms comes in different versions:

**Fluent Forms Core** is a free WordPress plugin. It includes its main functionalities, enabling users to manage creating forms with conditional logics,email notifications etc.

**Fluent Forms Pro** is a paid version that adds a number of advanced features and options not found in the free version. It comes lots of integrations and amazing features including step forms , post create and update , user registration ,payments with multiple gateway etc.

## Directory Structure

```yaml
├── app
│   ├── Api         # contains PHP API Utility classes
│   └── Functions   # contains global functions
│   └── Hooks       # actions and filters handlers
│   └── Http        # REST API routes, controllers, policies
│   └── Models      # Database Molders
│   └── Modules     # Old Modules Services
│   └── Services    # Module Services
│   └── views       # php view files
│   └── App.php
│
├── assets          # contains css,js, media files
├── boot            # [internal] contains plugin boot files
├── config          # [internal] contains plugin framework top level config
├── database        # [internal] Database migration files
├── guten_block     # [internal] Guten Block files
├── includes        # [internal] Old Framework deprecated classes
├── language        # [internal] Language Files
├── vendor          # [internal] Core Framework Files
│
└── fluentform.php  # Plugin entry File
```

