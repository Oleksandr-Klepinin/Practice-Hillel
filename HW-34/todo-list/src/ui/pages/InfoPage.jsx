import { Box, Typography, Paper } from '@mui/material';

function InfoPage() {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
                Todo List User Guide
            </Typography>
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body1" paragraph>
                    Welcome to the Todo List application! This simple yet powerful tool will help you manage your daily tasks efficiently. Below you will find instructions on how to use the Todo List to its fullest.
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                    Adding a New Task
                </Typography>
                <Typography variant="body1" component="div" paragraph>
                    <b>Enter the Task:</b> Locate the text field labeled &quot;Add new task&quot; at the top of the application.<br/>
                    <b>Submit the Task:</b> After typing your task, you can add it to your list in two ways:
                    <ul>
                        <li>Press the &quot;Enter&quot; key on your keyboard.</li>
                        <li>Click the &quot;+&quot; icon button located to the right of the text field.</li>
                    </ul>
                    Your new task will appear in the list below.
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                    Completing a Task
                </Typography>
                <Typography variant="body1" paragraph>
                    <b>Mark as Done:</b> To mark a task as completed, click the checkbox to the left of the task. This will visually cross out the task, indicating it&apos;s completed.
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                    Deleting Tasks
                </Typography>
                <Typography variant="body1" component="div" paragraph>
                    <b>Delete a Single Task:</b> To remove a task, click the trash bin icon located on the right side of the task you wish to delete.<br/>
                    <b>Delete Completed Tasks:</b> To clear all completed tasks from your list, click the &quot;DELETE COMPLETED&quot; button located at the bottom of the application.<br/>
                    <b>Delete All Tasks:</b> If you wish to remove all tasks from your list, click the &quot;DELETE ALL&quot; button next to the &quot;DELETE COMPLETED&quot; button.
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                    Searching for a Task
                </Typography>
                <Typography variant="body1" paragraph>
                    <b>Use the Search Field:</b> Above the list of tasks, you&apos;ll find a search field labeled &quot;Search&quot;. Type here to filter tasks by their starting letters. The list will dynamically update to only show tasks that match your input.<br/>
                    <b>Clearing the Search:</b> To return to viewing all tasks, simply clear the text from the search field.
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                    Filtering Tasks
                </Typography>
                <Typography variant="body1" component="div" paragraph>
                    Below the task input field, you&apos;ll find the &quot;Filter&quot; component with three options: &quot;All&quot;, &quot;Active&quot;, and &quot;Completed&quot;:
                    <ul>
                        <li><b>All:</b> Shows all tasks.</li>
                        <li><b>Active:</b> Filters the list to only show tasks that are not marked as completed.</li>
                        <li><b>Completed:</b> Filters the list to only show tasks that are marked as completed.</li>
                    </ul>
                    Select any of these options to filter the tasks displayed according to their status.
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                    Task Count
                </Typography>
                <Typography variant="body1" paragraph>
                    At the bottom of the application, you&apos;ll find a count of the currently displayed tasks, allowing you to quickly see how many tasks are being shown based on your filters and search criteria.
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                    Tips
                </Typography>
                <Typography variant="body1" paragraph>
                    Regularly update your task list to keep track of your daily activities.<br/>
                    Use the search and filter functionalities to focus on tasks that need immediate attention.<br/>
                    Enjoy using the Todo List to stay organized and productive!
                </Typography>
            </Paper>
        </Box>
    );
}

export default InfoPage;