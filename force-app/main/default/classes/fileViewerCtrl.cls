public class fileViewerCtrl {
	@AuraEnabled
    public static List<ContentDocument> fetchContentDocument() {
        return [Select Id, Title, FileType, CreatedBy.Name, ContentSize From ContentDocument LIMIT 200];
    }
    
}