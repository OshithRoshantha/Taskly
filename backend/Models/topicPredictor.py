from transformers import pipeline
class predictor:
    def __init__(self,summary):
        self.summary=summary
        
    def model(self):
        summarizer=pipeline("summarization", model="t5-small")
        topic=summarizer(self.summary, max_length=15, min_length=7, do_sample=False)
        
        return topic[0]['summary_text']