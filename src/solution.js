const solution = function(graph, start, finish)  {
    const costs = {}, parents = {}, solution = {};
    const rightPath = [];
    
    costs[start] = 0;
    for (let node in graph) {
        for (let neighbour in graph[node]) {
            let newCost = costs[node] + graph[node][neighbour];
            if (costs[neighbour]) {
                if (costs[neighbour] > newCost) {
                    costs[neighbour] = newCost;
                    parents[neighbour] = node;
                }
            } else {
                costs[neighbour] = newCost;
                parents[neighbour] = node;
            }            
        }        
    }
    let parent = finish;
    while (parent) {
        rightPath.unshift(parent);
        parent = parents[parent];
    }
    solution.distance = costs[finish];
    solution.path = rightPath;
    return solution;
}
