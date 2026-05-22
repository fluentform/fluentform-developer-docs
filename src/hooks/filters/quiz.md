# Quiz Filters

<Badge type="tip" vertical="top" text="Filter Hooks" /> <Badge type="warning" vertical="top" text="6 Filters" />

These filters let you modify quiz results, scoring, and display.

<explain-block title="fluentform/quiz_case_sensitive_off">

You can use this filter to toggle quiz case sensitivity.

**Parameters**

- `$status` (array) Whether Quiz Case Sensitivity is enabled

**Usage**

```php
add_filter('fluentform/quiz_case_sensitive_off', function ($status) {
    // Do your stuff here
    
    return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/quiz_case_sensitive_off', __return_false());`

This filter is located in FluentFormPro\src\classes\Quiz\QuizController -> isCorrect($settings, $userValue,
$correctValue = '', $options = [])

</explain-block>

<explain-block title="fluentform/quiz_no_grade_label">

You can use this filter to change text of quiz result grade label.

**Parameters**

- `$gradeLabel` (string) Grade Label Name

**Usage**

```php
add_filter('fluentform/quiz_no_grade_label', function ($gradeLabel) {
    // Do your stuff here
    
    return $gradeLabel;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/quiz_no_grade_label', __('Not Graded', 'fluentformpro'));`

This filter is located in FluentFormPro\src\classes\Quiz\QuizScoreComponent -> addScoreToSubmission($value, $field, $submissionData, $form)

</explain-block>

<explain-block title="fluentform/quiz_personality_label">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$message` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/quiz_personality_label', function ($message, $form) {
    return $message;
}, 10, 2);
```

**Reference**

`$personalityLabel = apply_filters('fluentform/quiz_personality_label',__('Personality', 'fluentformpro'),$form);`

This filter is located in `src/classes/Quiz/QuizController.php` (line 390).

</explain-block>

<explain-block title="fluentform/quiz_personality_test_fallback_label">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$message` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/quiz_personality_test_fallback_label', function ($message, $form) {
    return $message;
}, 10, 2);
```

**Reference**

`$fallbackLabel = apply_filters('fluentform/quiz_personality_test_fallback_label', __('Did not match any options!', 'fluentformpro'), $form);`

This filter is located in `src/classes/Quiz/QuizScoreComponent.php` (line 240).

</explain-block>

<explain-block title="fluentform/quiz_result_message">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$resultHtml` — see source
- `$submission` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/quiz_result_message', function ($resultHtml, $submission, $form) {
    return $resultHtml;
}, 10, 3);
```

**Reference**

`'content' => apply_filters('fluentform/quiz_result_message', $resultHtml, $submission, $form)`

This filter is located in `src/classes/Quiz/QuizController.php` (line 789).

</explain-block>

<explain-block title="fluentform/quiz_result_table_html">

You can use this filter to modify quiz result table HTML.

**Parameters**

- `$html` (array) Quiz Result Table HTML
- `$form` (object) Form Object
- `$results` (array) Quiz Results
- `$quizSettings` (array) Quiz Settings
- `$entry` (array) Submission

**Usage**

```php
add_filter('fluentform/quiz_result_table_html', function ($html, $form, $results, $quizSettings, $entry) {
    // Do your stuff here
    
    return $html;
}, 10, 5);

```

**Reference**

`apply_filters('fluentform/quiz_result_table_html', $html, $form, $results, $quizSettings, $entry);`

This filter is located in FluentFormPro\src\classes\Quiz\QuizController -> getQuizResultTable($shortCode,
ShortCodeParser $parser)

</explain-block>

<explain-block title="fluentform/quiz_result_title">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$title` — see source
- `$submission` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/quiz_result_title', function ($title, $submission, $form) {
    return $title;
}, 10, 3);
```

**Reference**

`$title = apply_filters('fluentform/quiz_result_title', $title, $submission, $form);`

This filter is located in `src/classes/Quiz/QuizController.php` (line 785).

</explain-block>

<explain-block title="fluentform/quiz_right_ans_icon">

You can use this filter to change quiz right answer icon.

**Parameters**

- `$icon` (string) Icon Link in SVG Format

**Usage**

```php
add_filter('fluentform/quiz_right_ans_icon', function ($icon) {
    // Do your stuff here
    
    return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/quiz_right_ans_icon', $icon);`

This filter is located in FluentFormPro\src\classes\Quiz\QuizController -> getRightIcon()

</explain-block>

<explain-block title="fluentform/quiz_score_value">

You can use this filter to modify quiz score value.

**Parameters**

- `$result` (string) Quiz Score
- `$formId` (int) Form ID
- `$scoreType` (string) Quiz Score Type
- `$quizResults` (array) Quiz Score Formatted Result

**Usage**

```php
add_filter('fluentform/quiz_score_value', function ($result, $formId, $scoreType, $quizResults) {
    // Do your stuff here
    
    return $result;
}, 10, 4);

```

**Reference**

`apply_filters('fluentform/quiz_score_value', $result, $formId, $scoreType, $quizResults);`

This filter is located in FluentFormPro\src\classes\Quiz\QuizScoreComponent -> addScoreToSubmission($value, $field, $submissionData, $form)

</explain-block>

<explain-block title="fluentform/quiz_wrong_ans_icon">

You can use this filter to change quiz wrong answer icon.

**Parameters**

- `$icon` (string) Icon Link in SVG Format

**Usage**

```php
add_filter('fluentform/quiz_wrong_ans_icon', function ($icon) {
    // Do your stuff here
    
    return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/quiz_wrong_ans_icon', $icon);`

This filter is located in FluentFormPro\src\classes\Quiz\QuizController -> getWrongIcon()

</explain-block>

<explain-block title="fluentform/survey_field_label">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$data` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/survey_field_label', function ($data, $form) {
    return $data;
}, 10, 2);
```

**Reference**

`<div class="ff-poll-label"><?php echo apply_filters('fluentform/survey_field_label', $data['label'], $form); ?></div>`

This filter is located in `src/classes/SurveyResultProcessor.php` (line 119).

</explain-block>

<explain-block title="fluentform/survey_votes_text">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$message` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/survey_votes_text', function ($message, $form) {
    return $message;
}, 10, 2);
```

**Reference**

`<div class="ff-poll-answer-count">(<?php echo $report['count'] . apply_filters('fluentform/survey_votes_text', __(' votes', 'fluentformpro'), $form) ; ?>)</div>`

This filter is located in `src/classes/SurveyResultProcessor.php` (line 127).

</explain-block>
