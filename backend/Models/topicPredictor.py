from transformers import pipeline
class predictor:
    def __init__(self,summary):
        self.summary=summary
        
    def model(self):
        summarizer=pipeline("summarization", model="facebook/bart-large-cnn")
        topic=summarizer(self.summary,max_length=12,min_length=12,do_sample=False)
        
        return topic[0]['summary_text']