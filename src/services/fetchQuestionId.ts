export const fetchQuestionId = async (postId: number): Promise<string[]> => {
    const link = `https://api.stackexchange.com/2.3/answers/${postId}/questions?order=desc&sort=activity&site=stackoverflow`;
    const response = await fetch(link);
    const result = await response.json();
    if (result.items && result.items.length > 0) {
        return result.items.map((element: { question_id: string }) => element.question_id);
    }
    return [];
};

