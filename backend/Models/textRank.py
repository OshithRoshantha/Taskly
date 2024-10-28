from transformers import pipeline

summarizer=pipeline("summarization", model="facebook/bart-large-cnn")
summary="Write a report analyzing the impact of remote work on employee productivity and well-being. Include survey results, case studies, and recommendations for organizations looking to implement flexible work arrangements."

topic=summarizer(summary, max_length=12, min_length=12, do_sample=False)
print("Summary:")
print(topic[0]['summary_text'])
