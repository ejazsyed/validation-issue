module.exports = (app) => {
    // Your code here
    app.log.info("Yay, the app was loaded!");
  
    app.on("issues.opened", async (context) => {
      const issueComment = context.issue({
        body: "Thanks for opening this issue! we will be going to assign this to right developer",
      });
      const assignee = context.issue({
        assignees: "ejazsyed",
      })
      context.octokit.issues.createComment(issueComment);
      context.octokit.issues.addLabels(
        context.issue({
        labels: ["bug", "documentation"],
        })
        )
      return context.octokit.issues.addAssignees(assignee)
    });
}  