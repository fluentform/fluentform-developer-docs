# Fluent Forms Database Schema

<Badge type="tip" vertical="top" text="Fluent Forms Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Fluent Forms use custom database tables with options tables to store all the data. Here are the list of database tables, and it's schema to
understand overall database design and related data attributes of each model.
## Schema Design
<img :src="$withBase('/assets/img/ff-schema-design.png')" alt="Fluent Forms Schema Design" />

## Database Tables

## fluentform_forms

This table store the fields and settings of a form.

<table cellspacing="0" class="nowrap">
<thead><tr><th>Column</th><td>Type</td><td>Comment</td></tr></thead>
<tbody><tr><th>id</th><td><span title="">int unsigned</span> <i>Auto Increment</i></td><td>
</td></tr><tr class="odd"><th>title</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span></td><td>
</td></tr><tr><th>status</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i> <span title="Default value">[<b>Draft</b>]</span></td><td>
</td></tr><tr class="odd"><th>appearance_settings</th><td><span title="utf8mb4_unicode_520_ci">text</span> <i>NULL</i></td><td>
</td></tr><tr><th>form_fields</th><td><span title="utf8mb4_unicode_520_ci">longtext</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>has_payment</th><td><span title="">tinyint(1)</span> <span title="Default value">[<b>0</b>]</span></td><td>
</td></tr><tr><th>type</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>conditions</th><td><span title="utf8mb4_unicode_520_ci">text</span> <i>NULL</i></td><td>
</td></tr><tr><th>created_by</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>created_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr><tr><th>updated_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr></tbody></table>


## fluentform_submissions
Storing the form submissions

<table cellspacing="0" class="nowrap">
<thead><tr><th>Column</th><td>Type</td><td>Comment</td></tr></thead>
<tbody><tr><th>id</th><td><span title="">bigint unsigned</span> <i>Auto Increment</i></td><td>
</td></tr><tr class="odd"><th>form_id</th><td><span title="">int unsigned</span> <i>NULL</i></td><td>
</td></tr><tr><th>serial_number</th><td><span title="">int unsigned</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>response</th><td><span title="utf8mb4_unicode_520_ci">longtext</span> <i>NULL</i></td><td>
</td></tr><tr><th>source_url</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>user_id</th><td><span title="">int unsigned</span> <i>NULL</i></td><td>
</td></tr><tr><th>status</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i> <span title="Default value">[<b>unread</b>]</span></td><td>possible values: read, unread, trashed
</td></tr><tr class="odd"><th>is_favourite</th><td><span title="">tinyint(1)</span> <span title="Default value">[<b>0</b>]</span></td><td>
</td></tr><tr><th>browser</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>device</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr><th>ip</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>city</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr><th>country</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>payment_status</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr><th>payment_method</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>payment_type</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr><th>currency</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>payment_total</th><td><span title="">float</span> <i>NULL</i></td><td>
</td></tr><tr><th>total_paid</th><td><span title="">float</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>created_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr><tr><th>updated_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr></tbody></table>

## ff_scheduled_actions
Storing the scheduled actions details

<table cellspacing="0" class="nowrap">
<thead><tr><th>Column</th><td>Type</td><td>Comment</td></tr></thead>
<tbody><tr><th>id</th><td><span title="">bigint unsigned</span> <i>Auto Increment</i></td><td>
</td></tr><tr class="odd"><th>action</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr><th>form_id</th><td><span title="">bigint unsigned</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>origin_id</th><td><span title="">bigint unsigned</span> <i>NULL</i></td><td>
</td></tr><tr><th>feed_id</th><td><span title="">bigint unsigned</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>type</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i> <span title="Default value">[<b>submission_action</b>]</span></td><td>
</td></tr><tr><th>status</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>data</th><td><span title="utf8mb4_unicode_520_ci">longtext</span> <i>NULL</i></td><td>
</td></tr><tr><th>note</th><td><span title="utf8mb4_unicode_520_ci">tinytext</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>retry_count</th><td><span title="">int unsigned</span> <i>NULL</i> <span title="Default value">[<b>0</b>]</span></td><td>
</td></tr><tr><th>created_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>updated_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr></tbody></table>

## fluentform_coupons
Storing coupon data
<table cellspacing="0" class="nowrap">
<thead><tr><th>Column</th><td>Type</td><td>Comment</td></tr></thead>
<tbody><tr><th>id</th><td><span title="">int</span> <i>Auto Increment</i></td><td>
</td></tr><tr class="odd"><th>title</th><td><span title="utf8mb4_unicode_520_ci">varchar(192)</span> <i>NULL</i></td><td>
</td></tr><tr><th>code</th><td><span title="utf8mb4_unicode_520_ci">varchar(192)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>coupon_type</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i> <span title="Default value">[<b>percent</b>]</span></td><td>
</td></tr><tr><th>amount</th><td><span title="">decimal(10,2)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>status</th><td><span title="utf8mb4_unicode_520_ci">varchar(192)</span> <i>NULL</i> <span title="Default value">[<b>active</b>]</span></td><td>
</td></tr><tr><th>stackable</th><td><span title="utf8mb4_unicode_520_ci">varchar(192)</span> <i>NULL</i> <span title="Default value">[<b>no</b>]</span></td><td>
</td></tr><tr class="odd"><th>settings</th><td><span title="utf8mb4_unicode_520_ci">longtext</span> <i>NULL</i></td><td>
</td></tr><tr><th>created_by</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>min_amount</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr><th>max_use</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>start_date</th><td><span title="">date</span> <i>NULL</i></td><td>
</td></tr><tr><th>expire_date</th><td><span title="">date</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>created_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr><tr><th>updated_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr></tbody></table>

## fluentform_draft_submissions
Draft submission for saved form state and multi step forms.
<table cellspacing="0" class="nowrap">
<thead><tr><th>Column</th><td>Type</td><td>Comment</td></tr></thead>
<tbody><tr><th>id</th><td><span title="">bigint unsigned</span> <i>Auto Increment</i></td><td>
</td></tr><tr class="odd"><th>form_id</th><td><span title="">int unsigned</span> <i>NULL</i></td><td>
</td></tr><tr><th>hash</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span></td><td>
</td></tr><tr class="odd"><th>type</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i> <span title="Default value">[<b>step_data</b>]</span></td><td>
</td></tr><tr><th>step_completed</th><td><span title="">int unsigned</span></td><td>
</td></tr><tr class="odd"><th>user_id</th><td><span title="">int unsigned</span></td><td>
</td></tr><tr><th>response</th><td><span title="utf8mb4_unicode_520_ci">longtext</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>source_url</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr><th>browser</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>device</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr><th>ip</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>created_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr><tr><th>updated_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr></tbody></table>

## fluentform_entry_details
Submission Entry Details
<table cellspacing="0" class="nowrap">
<thead><tr><th>Column</th><td>Type</td><td>Comment</td></tr></thead>
<tbody><tr><th>id</th><td><span title="">bigint unsigned</span> <i>Auto Increment</i></td><td>
</td></tr><tr class="odd"><th>form_id</th><td><span title="">bigint unsigned</span> <i>NULL</i></td><td>
</td></tr><tr><th>submission_id</th><td><span title="">bigint unsigned</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>field_name</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr><th>sub_field_name</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>field_value</th><td><span title="utf8mb4_unicode_520_ci">longtext</span> <i>NULL</i></td><td>
</td></tr></tbody></table>


## fluentform_form_analytics
Form analytics data
<table cellspacing="0" class="nowrap">
<thead><tr><th>Column</th><td>Type</td><td>Comment</td></tr></thead>
<tbody><tr><th>id</th><td><span title="">int unsigned</span> <i>Auto Increment</i></td><td>
</td></tr><tr class="odd"><th>form_id</th><td><span title="">int unsigned</span> <i>NULL</i></td><td>
</td></tr><tr><th>user_id</th><td><span title="">int unsigned</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>source_url</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span></td><td>
</td></tr><tr><th>platform</th><td><span title="utf8mb4_unicode_520_ci">char(30)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>browser</th><td><span title="utf8mb4_unicode_520_ci">char(30)</span> <i>NULL</i></td><td>
</td></tr><tr><th>city</th><td><span title="utf8mb4_unicode_520_ci">varchar(100)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>country</th><td><span title="utf8mb4_unicode_520_ci">varchar(100)</span> <i>NULL</i></td><td>
</td></tr><tr><th>ip</th><td><span title="utf8mb4_unicode_520_ci">char(15)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>count</th><td><span title="">int</span> <i>NULL</i> <span title="Default value">[<b>1</b>]</span></td><td>
</td></tr><tr><th>created_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr></tbody></table>

## fluentform_form_meta
Fluent Form meta data
<table cellspacing="0" class="nowrap">
<thead><tr><th>Column</th><td>Type</td><td>Comment</td></tr></thead>
<tbody><tr><th>id</th><td><span title="">int unsigned</span> <i>Auto Increment</i></td><td>
</td></tr><tr class="odd"><th>form_id</th><td><span title="">int unsigned</span> <i>NULL</i></td><td>
</td></tr><tr><th>meta_key</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span></td><td>
</td></tr><tr class="odd"><th>value</th><td><span title="utf8mb4_unicode_520_ci">longtext</span> <i>NULL</i></td><td>
</td></tr></tbody></table>

## fluentform_logs
Store Form activity & api log
<table cellspacing="0" class="nowrap">
<thead><tr><th>Column</th><td>Type</td><td>Comment</td></tr></thead>
<tbody><tr><th>id</th><td><span title="">int unsigned</span> <i>Auto Increment</i></td><td>
</td></tr><tr class="odd"><th>parent_source_id</th><td><span title="">int unsigned</span> <i>NULL</i></td><td>
</td></tr><tr><th>source_type</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>source_id</th><td><span title="">int unsigned</span> <i>NULL</i></td><td>
</td></tr><tr><th>component</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>status</th><td><span title="utf8mb4_unicode_520_ci">char(30)</span> <i>NULL</i></td><td>
</td></tr><tr><th>title</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span></td><td>
</td></tr><tr class="odd"><th>description</th><td><span title="utf8mb4_unicode_520_ci">longtext</span> <i>NULL</i></td><td>
</td></tr><tr><th>created_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr></tbody></table>

## fluentform_order_items
Fluent Form Payment order Items

<table cellspacing="0" class="nowrap">
<thead><tr><th>Column</th><td>Type</td><td>Comment</td></tr></thead>
<tbody><tr><th>id</th><td><span title="">int</span> <i>Auto Increment</i></td><td>
</td></tr><tr class="odd"><th>form_id</th><td><span title="">int</span></td><td>
</td></tr><tr><th>submission_id</th><td><span title="">int</span></td><td>
</td></tr><tr class="odd"><th>type</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i> <span title="Default value">[<b>single</b>]</span></td><td>
</td></tr><tr><th>parent_holder</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>billing_interval</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr><th>item_name</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>quantity</th><td><span title="">int</span> <i>NULL</i> <span title="Default value">[<b>1</b>]</span></td><td>
</td></tr><tr><th>item_price</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>line_total</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr><th>created_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>updated_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr></tbody></table>

## fluentform_submission_meta
Form Submission meta

<table cellspacing="0" class="nowrap">
<thead><tr><th>Column</th><td>Type</td><td>Comment</td></tr></thead>
<tbody><tr><th>id</th><td><span title="">bigint unsigned</span> <i>Auto Increment</i></td><td>
</td></tr><tr class="odd"><th>response_id</th><td><span title="">bigint unsigned</span> <i>NULL</i></td><td>
</td></tr><tr><th>form_id</th><td><span title="">int unsigned</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>meta_key</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr><th>value</th><td><span title="utf8mb4_unicode_520_ci">longtext</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>status</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr><th>user_id</th><td><span title="">int unsigned</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>name</th><td><span title="utf8mb4_unicode_520_ci">varchar(45)</span> <i>NULL</i></td><td>
</td></tr><tr><th>created_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>updated_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr></tbody></table>

## fluentform_subscriptions
Payment Subscriptions

<table cellspacing="0" class="nowrap">
<thead><tr><th>Column</th><td>Type</td><td>Comment</td></tr></thead>
<tbody><tr><th>id</th><td><span title="">int</span> <i>Auto Increment</i></td><td>
</td></tr><tr class="odd"><th>submission_id</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr><th>form_id</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>payment_total</th><td><span title="">int</span> <i>NULL</i> <span title="Default value">[<b>0</b>]</span></td><td>
</td></tr><tr><th>item_name</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>plan_name</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr><th>parent_transaction_id</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>billing_interval</th><td><span title="utf8mb4_unicode_520_ci">varchar(50)</span> <i>NULL</i></td><td>
</td></tr><tr><th>trial_days</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>initial_amount</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr><th>quantity</th><td><span title="">int</span> <i>NULL</i> <span title="Default value">[<b>1</b>]</span></td><td>
</td></tr><tr class="odd"><th>recurring_amount</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr><th>bill_times</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>bill_count</th><td><span title="">int</span> <i>NULL</i> <span title="Default value">[<b>0</b>]</span></td><td>
</td></tr><tr><th>vendor_customer_id</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>vendor_subscription_id</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr><th>vendor_plan_id</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>status</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i> <span title="Default value">[<b>pending</b>]</span></td><td>
</td></tr><tr><th>initial_tax_label</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>initial_tax</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr><th>recurring_tax_label</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>recurring_tax</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr><th>element_id</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>note</th><td><span title="utf8mb4_unicode_520_ci">text</span> <i>NULL</i></td><td>
</td></tr><tr><th>original_plan</th><td><span title="utf8mb4_unicode_520_ci">text</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>vendor_response</th><td><span title="utf8mb4_unicode_520_ci">longtext</span> <i>NULL</i></td><td>
</td></tr><tr><th>expiration_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>created_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr><tr><th>updated_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr></tbody></table>


## fluentform_transactions
Payment Transactions
<table cellspacing="0" class="nowrap">
<thead><tr><th>Column</th><td>Type</td><td>Comment</td></tr></thead>
<tbody><tr><th>id</th><td><span title="">int</span> <i>Auto Increment</i></td><td>
</td></tr><tr class="odd"><th>transaction_hash</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr><th>payer_name</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>payer_email</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr><th>billing_address</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>shipping_address</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr><th>form_id</th><td><span title="">int</span></td><td>
</td></tr><tr class="odd"><th>user_id</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr><th>submission_id</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>subscription_id</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr><th>transaction_type</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i> <span title="Default value">[<b>onetime</b>]</span></td><td>
</td></tr><tr class="odd"><th>payment_method</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr><th>card_last_4</th><td><span title="">int</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>card_brand</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr><th>charge_id</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>payment_total</th><td><span title="">int</span> <i>NULL</i> <span title="Default value">[<b>1</b>]</span></td><td>
</td></tr><tr><th>status</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>currency</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr><th>payment_mode</th><td><span title="utf8mb4_unicode_520_ci">varchar(255)</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>payment_note</th><td><span title="utf8mb4_unicode_520_ci">longtext</span> <i>NULL</i></td><td>
</td></tr><tr><th>created_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr><tr class="odd"><th>updated_at</th><td><span title="">timestamp</span> <i>NULL</i></td><td>
</td></tr></tbody></table>

