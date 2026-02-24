# What is Fluent Forms?

<Badge type="tip" vertical="top" text="Fluent Forms Core" /> <Badge type="warning" vertical="top" text="Basic" />

Fluent Forms is a user-friendly drag-and-drop WordPress contact form plugin with more than 30 form fields, 3rd party integrations, built-in entry management system, etc. With Fluent Forms, you can create forms, payment forms, and quizzes in minutes.
## Fluent Forms Versions

Fluent Forms comes in different versions:

**Fluent Forms Core** is a free WordPress plugin. It includes its main functionalities, enabling users to create forms with conditional logic, email notifications, and more.

**Fluent Forms Pro** is a paid version that adds a number of advanced features and options not found in the free version. It comes with lots of integrations and features including step forms, post creation and updates, user registration, payments with multiple gateways, and more.

## Directory Structure

```yaml
├── app
│   ├── Api         # contains PHP API Utility classes
│   └── Helpers     # Helper, Protector, Str utility classes
│   └── Hooks       # actions and filters handlers
│   └── Http        # REST API routes, controllers, policies
│   └── Models      # Database Models
│   └── Modules     # Old Modules Services
│   └── Services    # Module Services
│   └── views       # php view files
│   └── App.php
│
├── assets          # contains css,js, media files
├── boot            # Plugin boot files and global functions
├── config          # [internal] contains plugin framework top level config
├── database        # [internal] Database migration files
├── guten_block     # [internal] Guten Block files
├── includes        # [internal] Old Framework deprecated classes
├── language        # [internal] Language Files
├── vendor          # [internal] Core Framework Files
│
└── fluentform.php  # Plugin entry File
```

